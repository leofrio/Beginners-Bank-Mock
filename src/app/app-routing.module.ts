import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { StatementComponent } from './components/statement/statement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'statement', pathMatch: 'full' },
  { path: 'statement', component: StatementComponent },
  { path: 'new-transaction', component: NewTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
