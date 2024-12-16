import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SaveFeedbackService {

  constructor(
    private snackBar: MatSnackBar
  ) {  
  }

  public showSuccsessFeedback(message?: string) {
    const text = message ? message : 'A mentés sikeres!';
    this.snackBar.open(text, '✔', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-green']
    });
  }

  public showErrorFeedback(message?: string, duration?: number) {
    const errorClearTime = 10;
    const timeDuration = duration ? duration : (errorClearTime ? errorClearTime : 0);
    const text = message ? message : 'A mentés sikertelen!';
    this.snackBar.open(text, '✖', {
      duration: timeDuration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-red', 'snackbar-multi-line']
    });
  }

  public hideFeedbackMessage() {
    this.snackBar?.dismiss();
  }

}
