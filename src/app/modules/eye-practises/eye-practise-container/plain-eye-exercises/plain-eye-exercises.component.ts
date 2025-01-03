import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../../../../services/practice.service';
import { Observable } from 'rxjs';
import { EyePracticeType } from '../../../shared/enum/eye-practice-enum';
import { Practice } from '../../../../models/practice';
import { SnackbarService } from '../../../../services/snackbar/snackbar.service';
import { Exercise } from '../../../../models/exercise';
import { ExerciseService } from '../../../../services/exercise.service';

@Component({
  selector: 'app-plain-eye-exercises',
  templateUrl: './plain-eye-exercises.component.html',
  styleUrl: './plain-eye-exercises.component.css'
})
export class PlainEyeExercisesComponent implements OnInit {

  title: string = "Szemtorna gyakorlatok"
  eyePractice!: Practice;
  eyeExerciseList!: Exercise[];

  constructor(
      private readonly practiceService: PracticeService,
      private readonly exerciseService: ExerciseService,
      private readonly snackbar: SnackbarService
    ) {
    }

  ngOnInit(): void {
    this.initData();
    this.exerciseService.startExercise();
  }
  
  private initData(): void {
    this.getPractiseByType().subscribe(
      {
        next: (practice) => {
          if (practice) {
            this.eyePractice = practice;
            this.getAllPracticeExercises();
          }
        },
        error: (error) => {
          this.snackbar.errorMessage(error.message);
        }
      }
    );
  }

  public getPractiseByType(): Observable<any> {
    return this.practiceService.getPractiseByType(EyePracticeType.TORNA);
  }

  private getAllPracticeExercises() {
    this.callAllExercisesByPractice().subscribe(
      {
        next: (exercises) => {
          if (exercises) {
            this.eyeExerciseList = exercises;
          }
        },
        error: (error) => {
          this.snackbar.errorMessage(error.message);
        }
      }
    );
  }

  public callAllExercisesByPractice(): Observable<any> {
    return this.exerciseService.getAllEyeExerciseByEyePracticeId(this.eyePractice.id);
  }

}
