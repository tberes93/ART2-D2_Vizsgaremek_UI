/*
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import {environment} from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  login(username: string, password: string): Observable<any> {
    const loginPayload = { userCode: username, password: password };

    return this.http.post<any>(`${environment.apiUrl}/auth/login`, loginPayload).pipe(
      tap((response) => {
        
        if (response.authToken) {
          localStorage.setItem('authToken', response.authToken);
          this.isLoggedIn = true;
        }
          this.isLoggedIn = true;
      }),
      catchError((error) => {
        console.log('ERROR: ', error);
        return of(null);
      })
    );
  }

  async logout(): Promise<void> {
    //localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    await this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn/* || !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}*/
