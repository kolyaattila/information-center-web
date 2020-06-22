import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../core/services/course.service';
import {Course} from '../../../shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList: Course[] = [];

  constructor(private courseService: CourseService) {
    courseService.getAllActiveCourses().subscribe(
      data => {
        this.courseList = data;
      },
      error => this.courseList = []
    );
  }

  ngOnInit() {

  }

}
