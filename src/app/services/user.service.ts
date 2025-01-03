import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../models/authuser';
import { environment } from '../../environments/environment';
import { AppUser } from '../models/appuser';
import { Reward } from '../models/reward';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }


    getUserData(userId: number) {
        return this.http.get<AppUser>(`${environment.apiUrl}/user/userdata/${userId}`);
    }

    getTop10() {
        return this.http.get<AuthUser[]>(`${environment.apiUrl}/user/top10`);
    }

    getAll() {
      return this.http.get<AuthUser[]>(`${environment.apiUrl}/user`);
    }

    postStartExercise(userId: number) {
        return this.http.post<any>(`${environment.apiUrl}/user/start-exercise`, { userId });
    }

    getAllRewardsByUser(userId: number) {
        return this.http.get<Reward[]>(`${environment.apiUrl}/user/rewards/${userId}`);
    }

}
