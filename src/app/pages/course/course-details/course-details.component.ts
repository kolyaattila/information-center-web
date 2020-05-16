import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  steps = [{
    number: 1,
    title: 'title',
    video: 'video',
    quiz: 'quiz',
    document: 'document',
    display: false
  },
    {
      number: 2,
      video: 'video',
      title: 'title',
      document: 'document',
      display: false
    },
    {
      number: 3,
      video: 'video',
      title: 'title',
      quiz: 'quiz',
      document: 'document',
      display: false
    },
    {
      number: 4,
      video: 'video',
      title: 'title',
      quiz: 'quiz',
      document: 'document',
      display: false
    },
    {
      number: 5,
      video: 'video',
      title: 'title',
      quiz: 'quiz',
      document: 'document',
      display: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  display(step) {
    this.steps.forEach(i => {
      if (i.number === step.number) {
        i.display = !i.display;
      }
    });
  }
}
