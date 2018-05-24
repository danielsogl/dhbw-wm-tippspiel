import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() openSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  public logo = 'assets/icons/icon-72x72.png';

  public isAuthenticated: boolean;

  public navItems = [
    { link: 'schedule', label: 'Spielplan' },
    { link: 'score', label: 'Spielstand' },
    { link: 'teams', label: 'Mannschaften' },
    { link: 'groups', label: 'Gruppen' },
    { link: 'player', label: 'Mitspieler' },
    { link: 'rules', label: 'Regeln' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  openMenu() {
    this.openSideNav.emit(true);
  }

  onLoginClick() {
    this.router.navigateByUrl('login');
  }

  onLogoutClick() {}
}
