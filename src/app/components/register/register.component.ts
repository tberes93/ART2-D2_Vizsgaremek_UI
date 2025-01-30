import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PASSWORD_MIN_LENGTH } from '../../services/authentication/auth.constant';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import { AuthenticationService } from '../../services/authentication/authentication-service';
import { Observable } from 'rxjs';
import { UserRegist } from '../../models/userregist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  minLength: number = PASSWORD_MIN_LENGTH;
  submitted: boolean = false;
  //token: string | undefined;

  constructor(
      private readonly formBuilder: FormBuilder,
      private readonly snackbar: SnackbarService,
      //private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/home']);
    }
    //this.token = undefined;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) return;

    this.postRegister().subscribe(
      {
        next: () => {
          this.router.navigate(['/login']);
          this.snackbar.registerSuccess();
        },
        error: (error) => {
          this.snackbar.errorMessage(error.message);
        }
      }
    );
  }

  public postRegister(): Observable<any> {
    const user: UserRegist = {
      'userName': this.registerForm.controls["username"]!.value,
      'firstName': this.registerForm.controls["firstname"]!.value,
      'lastName': this.registerForm.controls["lastname"]!.value,
      'password': this.registerForm.controls["password"]!.value,
    }
    return this.authenticationService.register(user);
  }

}
