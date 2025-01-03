import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EyePracticeType } from '../../../shared/enum/eye-practice-enum';
import { PracticeService } from '../../../../services/practice.service';
import { ExerciseService } from '../../../../services/exercise.service';
import { SnackbarService } from '../../../../services/snackbar/snackbar.service';
import { Practice } from '../../../../models/practice';
import { Exercise } from '../../../../models/exercise';

@Component({
  selector: 'app-reading-minuscule-letters',
  templateUrl: './reading-minuscule-letters.component.html',
  styleUrl: './reading-minuscule-letters.component.css'
})
export class ReadingMinusculeLettersComponent implements OnInit {


  title: string = "Olvasási gyakorlatok"

   eyePractice!: Practice;
   eyeExerciseList!: Exercise[];
   fontStyleList: string[] = ['font12', 'font10', 'font8', 'font6', 'font4'];
  
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
      return this.practiceService.getPractiseByType(EyePracticeType.OLVASAS);
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
