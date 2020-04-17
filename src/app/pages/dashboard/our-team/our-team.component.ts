import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  customOptions: OwlOptions = {
    margin: 0,
    loop: true,
    items: 3,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
