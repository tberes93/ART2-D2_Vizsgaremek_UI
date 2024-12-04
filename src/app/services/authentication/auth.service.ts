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
    const credentials = btoa(`${username}:${password}`); // Base64 kódolás
    const headers = new HttpHeaders({
      'Authorization': `Basic ${credentials}`
    });

    return this.http.post<any>(`${environment.apiUrl}/login`, {headers}).pipe(
      tap((response) => {
        console.log("válasz:", response);
        this.isLoggedIn = true;
      }),
      catchError((error) => {
        console.log('ERROR: ', error);
        return of(null);
      })
    );
  }

  async logout(): Promise<void> {
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    await this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
