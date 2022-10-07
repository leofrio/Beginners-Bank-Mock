import { Transaction } from '../models/transaction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionList: any[];
  private url = 'http://localhost:5000/transactions';
  constructor(private httpClient: HttpClient) {
    this.transactionList = [];
  }
  get transactions(): any[] {
    return this.transactionList;
  }
  getalltransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.url);
  }
  add(transaction: any): Observable<Transaction> {
    this.addDate(transaction);
    return this.httpClient.post<Transaction>(this.url, transaction);
  }
  //previously:hydrate
  private addDate(transaction: any): void {
    transaction.date = new Date();
  }
}
