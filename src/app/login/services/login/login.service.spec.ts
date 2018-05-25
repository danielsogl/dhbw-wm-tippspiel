import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreModule
} from 'angularfire2/firestore';

import { environment } from '../../../../environments/environment';
import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [
        LoginService,
        AngularFireAuth,
        { provide: AngularFirestore, depends: AngularFirestoreModule }
      ]
    });
  });

  it(
    'should be created',
    inject([LoginService], (service: LoginService) => {
      expect(service).toBeTruthy();
    })
  );
});
