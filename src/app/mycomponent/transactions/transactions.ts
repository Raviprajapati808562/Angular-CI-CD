
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notificationbackend } from '../notificationbackend';


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class TransactionsComponent implements OnInit {

  pageTitle = 'Transaction Reconciliation';
  transactions: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private backend: Notificationbackend, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.loading = true;
    this.errorMessage = '';

    this.backend.getTransactions().subscribe({
      next: (data) => {
        this.transactions = [...data];
        this.loading = false;

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Transaction API error:', error);

        this.errorMessage = 'Unable to load transactions.';
        this.loading = false;

        this.cdr.detectChanges();
      }
    });
  }

  countByStatus(status: string): number {
    return this.transactions.filter(
      txn => txn.status?.toUpperCase() === status.toUpperCase()
    ).length;
  }
}
