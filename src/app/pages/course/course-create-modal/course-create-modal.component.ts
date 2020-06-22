import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {Course} from '../../../shared/models/course';
import {CourseService} from '../../../core/services/course.service';

@Component({
  selector: 'app-course-create-modal',
  templateUrl: './course-create-modal.component.html',
  styleUrls: ['./course-create-modal.component.scss']
})
export class CourseCreateModalComponent implements OnInit {
  courseForm = new FormGroup({
    courseName: new FormControl('', {
      validators: [Validators.required]
    }),
    price: new FormControl('', {
      validators: [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    }),
    enable: new FormControl('', {
      validators: []
    }),
    description: new FormControl('', {
      validators: [Validators.required]
    })
  });
  updateCourseAction = false;
  updateCourse: Course;

  constructor(public dialogRef: MatDialogRef<CourseCreateModalComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData: any,
              private courseService: CourseService,
              private toastr: ToastrService) {
    if (modalData && modalData.course) {
      this.updateCourseAction = true;
      this.updateCourse = modalData.course;
      this.initFormForUpdate(modalData.course);
    }
  }

  ngOnInit() {
  }

  get courseName() {
    return this.courseForm.get('courseName');
  }

  get price() {
    return this.courseForm.get('price');
  }

  get enable() {
    return this.courseForm.get('enable');
  }

  saveCourse() {
    if (!this.courseForm.valid) {
      return;
    }

    if (!this.updateCourseAction) {
      this.updateCourse = new Course();
    }

    this.updateCourse.enable = this.enable.value;
    this.updateCourse.name = this.courseName.value;
    this.updateCourse.price = this.price.value;
    this.updateCourse.description = this.description.value;

    this.saveOrUpdate(this.updateCourse).subscribe(
      data => {
        this.toastr.success('Course salvat');
        this.dialogRef.close(this.updateCourse);
      },
      error1 => {
        this.toastr.error(error1.message, 'A aparut o eroare');
      }
    );
  }

  get description() {
    return this.courseForm.get('description');
  }

  closeModal() {
    this.dialogRef.close(false);
  }

  private saveOrUpdate(course: Course) {
    if (this.updateCourseAction) {
      return this.courseService.updateCourse(course);
    } else {
      return this.courseService.createCourse(course);
    }
  }

  private initFormForUpdate(course: Course) {
    this.courseForm = new FormGroup({
      courseName: new FormControl(course.name, {
        validators: [Validators.required]
      }),
      price: new FormControl(course.price, {
        validators: [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
      }),
      enable: new FormControl(course.enable, {
        validators: []
      }),
      description: new FormControl(course.description, {
        validators: [Validators.required]
      })
    });
  }
}
