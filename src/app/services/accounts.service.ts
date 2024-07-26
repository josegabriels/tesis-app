import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = `${environment.apiUrl}/accounts`;

  constructor(private http: HttpClient) { }

  addAccount(account: Account): Observable<any> {
    return this.http.post<Account>(this.baseUrl, account)
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl)
  }

  myAccounts(): Observable<Account[]> {
    let url = `${this.baseUrl}/consultant_accounts`;
    return this.http.get<Account[]>(url)
  }

  getAccount(id: number): Observable<Account> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Account>(url)
  }

  updateAccount(account: Account): Observable<any> {
    let url = `${this.baseUrl}/${account.id}`;
    return this.http.put(url, account)
  }

}
