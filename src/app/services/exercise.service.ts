import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication/authentication-service';
import { UserService } from './user.service';
import { Observable } from 'rxjs/internal/Observable';
import { SnackbarService } from './snackbar/snackbar.service';


@Injectable({ providedIn: 'root' })
export class ExerciseService {
    constructor(private http: HttpClient,
        private readonly authService: AuthenticationService,
        private readonly userService: UserService,
        private readonly snackbar: SnackbarService
    ) { 
     }

    getAllEyeExerciseByEyePracticeId(eyePracticeId: number) {
        return this.http.get<Exercise[]>(`${environment.apiUrl}/exercise/list/${eyePracticeId}`);
    }

    public startExercise() {
        const user = this.authService.userValue;
        if (!user || !user.id) {
          return;
        }
        this.postStartExercise(user.id).subscribe(
          {
            next: () => {
            },
            error: (error) => {
              this.snackbar.errorMessage(error.message);
            }
          }
        );
      }
  
      public postStartExercise(userId: number): Observable<any> {
        return this.userService.postStartExercise(userId);
      }

}
