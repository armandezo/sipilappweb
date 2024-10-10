import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.apiUrl}/auth/login`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map((response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          return response.data;
        }
        return null;
      }),
      catchError(error => {
        if (error.status === 400) {
          console.error('Error de validación:', error.error.message);
        } else if (error.status === 403) {
          console.error('Credenciales incorrectas:', error.error.message);
        } else {
          console.error('Error en el inicio de sesión:', error);
        }
        return throwError(error);
      })
    );
  }
}
