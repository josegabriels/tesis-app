import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultant } from '../models/consultant.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  baseUrl = `${environment.apiUrl}/consultants`;

  constructor(private http: HttpClient) { }

  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(this.baseUrl)
  }

}
