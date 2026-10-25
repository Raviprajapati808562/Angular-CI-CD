
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-swcbsreconcomponent',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './swcbsreconcomponent.html',
  styleUrl: './swcbsreconcomponent.css',
})
export class Swcbsreconcomponent {

  txnDate: Date | null = new Date();

  cycles: number[] = Array.from(
    { length: 10 },
    (_, i) => i + 1
  );

  selectedCycle = 1;
  loading = false;
  message = '';

  // Replace this example URL with your actual backend endpoint.
  private apiUrl = 'http://localhost:9090/v1/recon/run';

  constructor(private http: HttpClient) {}

  runRecon(): void {
    if (!this.txnDate) {
      this.message = 'Please select a transaction date';
      return;
    }

    // Format date as yyyy-MM-dd without timezone conversion.
    const txnDate = [
      this.txnDate.getFullYear(),
      String(this.txnDate.getMonth() + 1).padStart(2, '0'),
      String(this.txnDate.getDate()).padStart(2, '0')
    ].join('-');

    const request = {
      txnDate: txnDate,
      cycle: this.selectedCycle
    };

    this.loading = true;
    this.message = '';

    this.http.post(this.apiUrl, request, {
      responseType: 'text'
    }).subscribe({
      next: (response) => {
        this.message = response || 'Reconciliation completed successfully';
        console.log('Backend response:', response);
        this.loading = false;
      },
      error: (error) => {
        console.error('Reconciliation API error:', error);
        this.message = 'Reconciliation failed. Check the backend API.';
        this.loading = false;
      }
    });
  }
}
