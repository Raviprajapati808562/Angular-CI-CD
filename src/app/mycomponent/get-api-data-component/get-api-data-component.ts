import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Notificationbackend } from '../notificationbackend';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-api-data-component',
  imports: [CommonModule],
  templateUrl: './get-api-data-component.html',
  styleUrl: './get-api-data-component.css',
})
export class GetApiDataComponent implements OnInit {

  apiData: any;

  constructor(private notification: Notificationbackend, private snack: MatSnackBar, 
    private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.notification.getData().subscribe({
      next: (response) => {
        console.log(response);
        this.apiData = response;
        this.cdr.detectChanges();
        this.snack.open("Data Fetched from backend API", "OK", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });

      },
      error: (error) => {
        console.log(error);
        this.snack.open("Don't sent blank data ok ", "OK", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }
}