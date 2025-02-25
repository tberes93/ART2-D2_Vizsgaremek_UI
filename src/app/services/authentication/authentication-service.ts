import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from '../../models/authuser';
import { environment } from '../../../environments/environment';
import { UserRegist } from '../../models/userregist';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<AuthUser | null>;
    public user: Observable<AuthUser | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(userName: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/authenticate`, { userName, password })
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(userName + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    register(userRegistData : UserRegist) {
        return this.http.post<any>(`${environment.apiUrl}/auth/register`, 
            { 
                userName: userRegistData.userName,
                firstName: userRegistData.firstName,
                lastName: userRegistData.lastName,
                password: userRegistData.password
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}