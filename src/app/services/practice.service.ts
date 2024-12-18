import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Practice } from '../models/practice';
import { EyePracticeType } from '../modules/shared/enum/eye-practice-enum';


@Injectable({ providedIn: 'root' })
export class PracticeService {
    constructor(private http: HttpClient) { }

    getPractiseByType(type: EyePracticeType) {
        const typeCode = Object.keys(EyePracticeType)[Object.values(EyePracticeType).indexOf(type)];
        return this.http.get<Practice>(`${environment.apiUrl}/practice/${typeCode}`);
    }

}