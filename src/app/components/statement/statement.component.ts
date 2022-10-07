import { Transaction } from '../../models/transaction.model';
import { TransactionService } from './../../services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  transactions: any[];

  constructor(private service: TransactionService) {}

  ngOnInit(): void {
    this.service
      .getalltransactions()
      .subscribe((transactions: Transaction[]): void => {
        console.table(transactions);
        this.transactions = transactions;
      });
  }
}
