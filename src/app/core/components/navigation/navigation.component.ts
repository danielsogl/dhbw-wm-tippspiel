import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

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

  constructor(
    private auth: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(data => {
      if (data) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  openMenu() {
    this.openSideNav.emit(true);
  }

  onLoginClick() {
    this.router.navigateByUrl('login');
  }

  onOverviewClicked() {
    this.router.navigateByUrl('profile');
  }

  onLogoutClick() {
    this.auth.signOut().then(() => {
      console.log('Abgemeldet');
      this.snackBar.open('Sie wurden abgemeldet', 'OK', { duration: 2500 });
    });
  }
}
