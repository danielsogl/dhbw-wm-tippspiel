import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  register(value: { email: string; password: string; displayName: string }) {
    return this.auth
      .registerWithEmail(value.email, value.password)
      .then((data: any) => {
        console.log('User created');
        const fbUser = this.auth.getCurrentUser();
        return fbUser
          .updateProfile({
            displayName: value.displayName,
            photoURL: null
          })
          .then(() => {
            const user = this.auth.getCurrentUser();
            return this.auth.updateUserData(user);
          });
      });
  }
}
