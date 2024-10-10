import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'; // Ajustar la ruta según tu estructura

@Injectable({
  providedIn: 'root',
})
export class InboxActoInseguroService {
  private apiUrl = `${environment.apiUrl}/unsafe-act/search`; // URL base del API ajustada desde el environment

  constructor(private http: HttpClient) {}

  buscarActosCondicionesInseguras(filtros: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, filtros, { headers });
  }
}
