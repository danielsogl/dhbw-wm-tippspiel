import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordRepeat: [null, [Validators.required]],
      displayName: [null, [Validators.required]]
    });
  }

  ngOnInit() {}

  register() {
    this.registerService
      .register(this.registerForm.getRawValue())
      .then(data => {
        console.log(data);
        console.log('USer registriert');
      })
      .catch(err => {
        console.error('Error', err);
      });
  }
}
