import { Injectable } from '@angular/core';

import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private auth: AuthService) {}

  login(data: { email: string; password: string }): Promise<any> {
    return this.auth.loginWithEmail(data.email, data.password);
  }
}
