import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})

export class PagesComponent implements OnInit {
  isOpen: boolean;

  ngOnInit(): void {
    this.isOpen = false;
  }

  onCloseNav(): void {
    this.isOpen = false;
  }

  onSwitchNav(){
    this.isOpen = !this.isOpen;
  }

}
