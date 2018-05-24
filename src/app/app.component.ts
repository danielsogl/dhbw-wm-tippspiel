import { Component, OnInit, ViewChild } from '@angular/core';

import { SideNavigationComponent } from './core/components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sideNav') sideNav: SideNavigationComponent;

  constructor() {}

  ngOnInit() {}

  openMenu() {
    this.sideNav.open();
  }

  closeMenu() {
    this.sideNav.close();
  }
}
