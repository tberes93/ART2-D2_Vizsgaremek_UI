import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  action: string = 'OK';
  loginMessage: string = 'Bent is vagy! Üdvözlünk az alkalmazásban. 🎉';
  logoutMessage: string = 'Legközelebb ismét találkozunk! 👋';

  private configSuccess: MatSnackBarConfig = {
    duration: 10000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['snackbar-primary'],
  }

  private readonly matSnackBar: MatSnackBar = inject(MatSnackBar);

  loginSuccess(): void {
    this.matSnackBar.open(this.loginMessage, this.action, this.configSuccess);
  }

  logoutSuccess(): void {
    this.matSnackBar.open(this.logoutMessage, this.action, this.configSuccess);
  }

}
