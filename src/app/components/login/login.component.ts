import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PASSWORD_MIN_LENGTH } from '../../services/authentication/auth.constant';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import { AuthenticationService } from '../../services/authentication/authentication-service';
import { first } from 'rxjs';

@Component({
  selector: 'pst-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  error = '';

  minLength: number = PASSWORD_MIN_LENGTH;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackbar: SnackbarService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    this.error = '';
    this.loading = true;
    this.authenticationService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from route parameters or default to '/'
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
                this.router.navigate([returnUrl]);
                this.snackbar.loginSuccess();
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });

    /*
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    //const [domain = '', username = ''] = principal.split('/');
    this.auth.login(username, password).subscribe((response) => {
      //TODO be kell kötni, majd ha lesz már auth a backenden
      // if (response.authToken) {
      //   this.router.navigate(['/home']).then(() => this.snackbar.loginSuccess());
      // }
    });*/
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
 

}
