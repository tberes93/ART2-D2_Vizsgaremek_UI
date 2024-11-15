import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MIN_LENGTH } from '../../services/authentication/auth.constant';

import {AuthService} from '../../services/authentication/auth.service';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'pst-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  minLength: number = MIN_LENGTH;

  constructor(
    private readonly auth: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly snackbar: SnackbarService,
    private readonly router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      principal: [''],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });

    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    const principal = this.loginForm.get('principal')?.value;
    const password = this.loginForm.get('password')?.value;

    const [domain = '', username = ''] = principal.split('/');

    this.auth.login(domain, username, password).subscribe((response) => {
      //TODO be kell kötni, majd ha lesz már auth a backenden
      // if (response.authToken) {
      //   this.router.navigate(['/home']).then(() => this.snackbar.loginSuccess());
      // }

      this.router.navigate(['/home']).then(() => this.snackbar.loginSuccess());

    });
  }
}
