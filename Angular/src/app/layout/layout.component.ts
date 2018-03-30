import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {

  constructor(public cookie: CookieService) { }

  title = 'Cinema App';

  active: boolean;
  mobile_menu: boolean;
  overlay: boolean;

  usermenu() {
    this.active = !this.active;
  }

  menu() {
    this.mobile_menu = !this.mobile_menu;
  }

  login() {
    this.overlay = !this.overlay;
  }
}
