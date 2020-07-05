import {Component, OnInit} from '@angular/core';
import {Course} from '../../../shared/models/course';
import {CourseService} from '../../../core/services/course.service';

@Component({
  selector: 'app-our-course',
  templateUrl: './our-course.component.html',
  styleUrls: ['./our-course.component.scss']
})
export class OurCourseComponent implements OnInit {
  bestCourses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getBestCourses().subscribe(data => this.bestCourses = data);
  }

}
