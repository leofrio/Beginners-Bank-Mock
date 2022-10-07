import { TransactionService } from './../../services/transaction.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransactionComponent implements OnInit {
  value: number = 0;
  destination: number = 0;

  @Output() whenTransfer: EventEmitter<any> = new EventEmitter<any>();
  transfer(): void {
    console.log('new transaction request');
    const valueToEmit = { value: this.value, destination: this.destination };
    this.service.add(valueToEmit).subscribe(
      (result) => {
        console.log(result);
        this.resetFields();
        this.router.navigateByUrl('statement');
      },
      (error) => console.error(error)
    );
  }

  resetFields(): void {
    this.value = 0;
    this.destination = 0;
  }

  constructor(private service: TransactionService, private router: Router) {}

  ngOnInit(): void {}
}
