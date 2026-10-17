import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Notificationbackend } from '../notificationbackend';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mycarcomponent',
   imports: [CommonModule],
  templateUrl: './mycarcomponent.html',
  styleUrl: './mycarcomponent.css',
})
export class Mycarcomponent implements OnInit {
 apiCarData: any;
  carDataFetched = false;

constructor(private notification: Notificationbackend, private snack: MatSnackBar, 
    private cdr: ChangeDetectorRef) {

  }
 ngOnInit(): void {
    this.notification.getCarData().subscribe({
      next: (response) => {
        console.log(response);
        this.apiCarData = response;
          this.carDataFetched = true;
        this.cdr.detectChanges();
        this.snack.open("Data Fetched from backend API", "OK", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });

      },
      error: (error) => {
        console.log(error);
        console.error('Car API Error:', error);
  console.log('Status:', error.status);
  console.log('Message:', error.message);
  console.log('Response:', error.error);
          this.carDataFetched = false;
        this.snack.open("Don't sent blank data ok ", "OK", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }
}
