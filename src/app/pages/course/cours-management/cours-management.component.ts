import {Component, OnInit} from '@angular/core';
import {Course} from '../../../shared/models/course';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CourseCreateModalComponent} from '../course-create-modal/course-create-modal.component';

@Component({
  selector: 'app-cours-management',
  templateUrl: './cours-management.component.html',
  styleUrls: ['./cours-management.component.scss']
})
export class CoursManagementComponent implements OnInit {

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  openEditCourseModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'edit-course-modal';
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';

    const modalDialog = this.matDialog.open(CourseCreateModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}
