import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-people-feedback',
  templateUrl: './people-feedback.component.html',
  styleUrls: ['./people-feedback.component.scss']
})
export class PeopleFeedbackComponent implements OnInit {
  customOptions: OwlOptions = {
    margin: 0,
    loop: true,
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  };

  constructor() {
  }

  ngOnInit() {
  }

}
