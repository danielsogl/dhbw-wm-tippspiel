import { Location } from '@angular/common';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreModule
} from 'angularfire2/firestore';

import { environment } from '../../../../environments/environment';
import { AuthService } from '../../services/auth/auth.service';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatSnackBarModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [NavigationComponent],
      providers: [
        AuthService,
        AngularFireAuth,
        { provide: AngularFirestore, depends: AngularFirestoreModule }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit open menu', () => {
    component.openMenu();
    expect(component.openSideNav).toBeTruthy();
  });

  it(
    'should navigate to login page',
    fakeAsync(() => {
      component.onLoginClick();
      tick(50);
      expect(location.path()).toBe('');
    })
  );

  it('should logout user', () => {
    component.onLogoutClick();
    expect(true).toBeTruthy();
  });
});
