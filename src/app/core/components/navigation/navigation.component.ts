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
    { link: '', label: 'Item 1' },
    { link: '', label: 'Item 2' },
    { link: '', label: 'Item 3' },
    { link: '', label: 'Item 4' }
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
