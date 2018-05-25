import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    public snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit() {}

  login() {
    this.loginService
      .login(this.loginForm.getRawValue())
      .then(() => {
        console.log('Authenticated');
        this.openSnackBar('Sie wurden erfolgreich angemeldet');
      })
      .catch(err => {
        console.error('Error', err);
        let alertMsg: string;
        switch (err.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
          case 'auth/invalid-email':
            alertMsg = 'Passwort und E-Mail Adresse passen nicht zusammen';
            break;
          case 'auth/network-request-failed':
            alertMsg = 'Keine Verbindung mit dem Server möglich';
            break;
          case 'auth/user-disabled':
            alertMsg = 'Ihr Nutzer wurde gesperrt';
            break;
          case 'auth/weak-password':
            alertMsg = 'Das Passwort muss mindestens 6 Zeichen lang sein';
            break;
          default:
            alertMsg = 'Es ist ein unerwarteter Fehler aufgetreten';
            break;
        }
        this.openSnackBar(alertMsg);
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2500 });
  }
}
