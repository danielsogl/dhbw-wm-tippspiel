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
    { link: 'schedule', label: 'Spielplan' },
    { link: 'score', label: 'Spielstand' },
    { link: 'teams', label: 'Mannschaften' },
    { link: 'groups', label: 'Gruppen' },
    { link: 'player', label: 'Mitspieler' },
    { link: 'rules', label: 'Regeln' }
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
