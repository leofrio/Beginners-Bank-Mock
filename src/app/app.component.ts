import { TransactionService } from './services/transaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beginner_bank';

  constructor(private service: TransactionService) {}
}
