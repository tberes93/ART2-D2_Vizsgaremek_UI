import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MIN_LENGTH } from '../../services/authentication/auth.constant';

import {AuthService} from '../../services/authentication/auth.service';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
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
      username: [''],
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

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;


    this.auth.login(username, password).subscribe((response) => {

      console.log('Logged in successfully', response);
      this.router.navigate(['/home']).then(() => this.snackbar.loginSuccess());

    });
  }
}
