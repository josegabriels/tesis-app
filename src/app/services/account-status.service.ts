import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountStatus } from '../models/account-status.model';

@Injectable({
  providedIn: 'root'
})
export class AccountStatusService {

  baseUrl = `${environment.apiUrl}/accounts-statuses`;

  constructor(private http: HttpClient) { }

  getAccountStatus(id: number): Observable<AccountStatus> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<AccountStatus>(url)
  }

  updateAccountStatus(accountstatus: AccountStatus): Observable<any> {
    let url = `${this.baseUrl}/${accountstatus.id}`;
    return this.http.put(url, accountstatus)
  }

}
