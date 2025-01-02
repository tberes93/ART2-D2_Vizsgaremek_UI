import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class ExerciseService {
    constructor(private http: HttpClient) { }

    getAllEyeExerciseByEyePracticeId(eyePracticeId: number) {
        return this.http.get<Exercise[]>(`${environment.apiUrl}/exercise/list/${eyePracticeId}`);
    }

}
