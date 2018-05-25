import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SideNavigationComponent } from './core/components/side-navigation/side-navigation.component';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sideNav') sideNav: SideNavigationComponent;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe(data => {
      if (data) {
        this.router.navigateByUrl('');
      } else {
        this.router.navigateByUrl('');
      }
    });
  }

  openMenu() {
    this.sideNav.open();
  }

  closeMenu() {
    this.sideNav.close();
  }
}
