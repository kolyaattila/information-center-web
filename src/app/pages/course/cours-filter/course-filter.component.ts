import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatMenuTrigger, MatTable} from '@angular/material';
import {Course} from '../../../shared/models/course';
import {ConfirmationModalComponent} from '../../../shared/modal/confirmation-modal/confirmation-modat.component';
import {CourseService} from '../../../core/services/course.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {CourseCreateModalComponent} from '../course-create-modal/course-create-modal.component';
import {CourseFilter} from '../../../shared/models/courseFilter';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.scss']
})
export class CourseFilterComponent implements OnInit {
  filter = new FormGroup({
    courseName: new FormControl('', {}),
    price: new FormControl('', {}),
    externalId: new FormControl('', {}),
    enable: new FormControl(false, {})
  });
  displayedColumns: string[] = ['name', 'author', 'createdAt', 'price', 'externalId', 'enable'];
  dataSource: Course[] = [];
  page = {
    pageSize: 10,
    pageIndex: 1,
    length: 0
  };

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  @ViewChild(MatMenuTrigger, {static: false})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = {x: '0px', y: '0px'};

  constructor(private matDialog: MatDialog,
              private courseService: CourseService,
              private toastr: ToastrService,
              private router: Router) {

  }

  ngOnInit() {
    this.getData({pageSize: 10, pageNumber: 0});
  }

  onContextMenu(event: MouseEvent, value: any) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {item: value};
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  get courseName() {
    return this.filter.get('courseName');
  }

  get price() {
    return this.filter.get('price');
  }

  get externalId() {
    return this.filter.get('externalId');
  }

  get enable() {
    return this.filter.get('enable');
  }

  openEditCourseModal(course: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'edit-course-modal';
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';
    dialogConfig.data = {course};

    const modalDialog = this.matDialog.open(CourseCreateModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCourse(result);
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  private deleteCourse(course: Course) {
    let courseIndex = -1;
    this.dataSource.forEach((courseSource, index) => {
        if (courseSource.externalId === course.externalId) {
          courseIndex = index;
        }
      }
    );

    if (courseIndex !== -1) {
      this.dataSource.splice(courseIndex, 1);
    }
  }

  changePage($event: any) {
    this.applyFilter($event.pageIndex, $event.pageSize);
  }


  applyFilter(pageNumber = 0, pageSize = 10) {
    const filter: CourseFilter = new CourseFilter();

    if (this.courseName.touched && this.courseName.dirty) {
      filter.name = this.courseName.value;
    }

    if (this.price.touched && this.price.dirty) {
      filter.priceSet = true;
      filter.price = this.price.value;
    }

    if (this.externalId.touched && this.externalId.dirty) {
      filter.externalId = this.externalId.value;
    }

    if (this.enable.touched && this.enable.dirty) {
      filter.enable = this.enable.value;
    }

    filter.pageNumber = pageNumber;
    filter.pageSize = pageSize;

    this.getData(filter);
  }

  private getData(filter: CourseFilter) {
    this.courseService.courseFilter(filter).subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource = data.content;
        this.page.length = data.totalElements;
        this.page.pageSize = data.size;
        this.page.pageIndex = data.number;
      }
    );
  }

  openDeleteCourseModal(item: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'confirmation-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    dialogConfig.data = {
      name: 'deleteCourse',
      title: 'Sunteti sigur ca doriti sa stergeti acest curs?',
      description: 'Daca veti continua cursul: ' + item.name + ' va fi sters impreuna cu toate quizurile',
      actionButtonText: 'Sterge'
    };

    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.deleteCourse(item.externalId).subscribe(
          data => {
            this.toastr.success('Cursul sters cu succes');
            this.deleteCourse(item);
          },
          error => {
            this.toastr.error('A aparut o eroare');
          });
      }
    });
  }

  redirectCourse(item) {
    this.router.navigate(['/course/details/' + item.externalId]);
  }
}
