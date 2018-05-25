import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreModule
} from 'angularfire2/firestore';

import { environment } from '../../../../environments/environment';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [
        RegisterService,
        AngularFireAuth,
        { provide: AngularFirestore, depends: AngularFirestoreModule }
      ]
    });
  });

  it(
    'should be created',
    inject([RegisterService], (service: RegisterService) => {
      expect(service).toBeTruthy();
    })
  );
});
