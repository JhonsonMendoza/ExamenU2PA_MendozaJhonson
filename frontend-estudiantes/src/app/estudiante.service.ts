import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private apiUrl = 'http://localhost:3000/api/estudiantes';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPorCedula(cedula: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cedula}`);
  }

  actualizarPorCedula(cedula: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cedula}`, data);
  }
}
