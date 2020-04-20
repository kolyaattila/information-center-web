import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {

  customOptions: OwlOptions = {
    margin: 30,
    loop: true,
    items: 2,
    dots: true,
    nav: false,
    rtl: true,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
