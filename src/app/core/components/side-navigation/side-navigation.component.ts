import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  public logo = 'assets/icons/icon-512x512.png';

  @ViewChild('sidenav') sideNav: MatSidenav;

  public navItems = [
    { link: '', label: 'Item 1' },
    { link: '', label: 'Item 2' },
    { link: '', label: 'Item 3' },
    { link: '', label: 'Item 4' }
  ];

  constructor() {}

  ngOnInit() {}

  open() {
    this.sideNav.open();
  }

  close() {
    this.sideNav.close();
  }
}
