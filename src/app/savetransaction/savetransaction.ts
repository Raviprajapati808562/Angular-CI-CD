import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Notificationbackend } from '../mycomponent/notificationbackend';


@Component({
  selector: 'app-savetransaction',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './savetransaction.html',
  styleUrl: './savetransaction.css',
})
export class AddTransactionComponent {

  saving = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  transaction = {
    reference_number: '',
    account_number: '',
    amount: null as number | null,
    direction: '',
    status: 'PENDING'
  };
  constructor(private backend: Notificationbackend) { }

  saveTransaction(form: NgForm): void {
    this.saving.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    this.backend.saveTransaction(this.transaction).subscribe({
      next: (response: string) => {
        // Display backend success message
        this.successMessage.set(response);
        this.errorMessage.set('');
        this.saving.set(false);

        // Reset all form fields and validation state
        form.resetForm({
          reference_number: '',
          account_number: '',
          amount: null,
          direction: '',
          status: 'PENDING'
        });
      },

      error: (error) => {
        console.error('API error:', error);

        this.errorMessage.set(
          'Unable to save transaction. Please try again.'
        );
        this.saving.set(false);
      }
    });
  }
  resetForm(form: NgForm): void {
    form.resetForm({
      reference_number: '',
      account_number: '',
      amount: null,
      direction: '',
      status: 'PENDING'
    });
    this.resetTransactionFields();
  }
  private resetTransactionFields(): void {
    this.transaction = {
      reference_number: '',
      account_number: '',
      amount: null,
      direction: '',
      status: 'PENDING'
    };
  }

}