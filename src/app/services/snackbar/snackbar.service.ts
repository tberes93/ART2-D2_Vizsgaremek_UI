import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  action: string = 'OK';
  error: string = 'HIBA';
  loginMessage: string = 'Bent is vagy! Üdvözlünk az alkalmazásban. 🎉';
  registerMessage: string = 'Sikeres regisztráció! 🎉';
  logoutMessage: string = 'Legközelebb ismét találkozunk! 👋';

  private configSuccess: MatSnackBarConfig = {
    duration: 10000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['snackbar-primary'],
  }

  private configError: MatSnackBarConfig = {
    duration: 10000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['snackbar-primary'],
  }

  private readonly matSnackBar: MatSnackBar = inject(MatSnackBar);

  loginSuccess(): void {
    this.matSnackBar.open(this.loginMessage, this.action, this.configSuccess);
  }

  registerSuccess(): void {
    this.matSnackBar.open(this.registerMessage, this.action, this.configSuccess);
  }

  logoutSuccess(): void {
    this.matSnackBar.open(this.logoutMessage, this.action, this.configSuccess);
  }

  errorMessage(errorMsg: string): void {
    this.matSnackBar.open(errorMsg, this.error, this.configError);
  }

}
