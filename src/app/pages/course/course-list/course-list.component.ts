import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList = [
    {
      price: 10,
      title: 'Basic Time Management Course',
      photo: '',
      author: 'Michael Windzor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
      peopleEnroled: 543,
      rating: 70,
      externalId: ''
    },
    {
      price: 10,
      title: 'Basic Time Management Course',
      photo: '',
      author: 'Michael Windzor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
      peopleEnroled: 543,
      rating: 70,
      externalId: ''
    },
    {
      price: 10,
      title: 'Basic Time Management Course',
      photo: '',
      author: 'Michael Windzor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
      peopleEnroled: 543,
      rating: 70,
      externalId: ''
    },
    {
      price: 10,
      title: 'Basic Time Management Course',
      photo: '',
      author: 'Michael Windzor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
      peopleEnroled: 543,
      rating: 70,
      externalId: ''
    },
    {
      price: 10,
      title: 'Basic Time Management Course',
      photo: '',
      author: 'Michael Windzor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
      peopleEnroled: 543,
      rating: 70,
      externalId: ''
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
