import { Component, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Notificationbackend } from '../notificationbackend';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificationcomponent',
  imports: [MatFormFieldModule, MatIconModule, MatToolbarModule, MatInputModule, MatButtonModule
    , JsonPipe, FormsModule, MatProgressSpinnerModule, CommonModule
  ],
  templateUrl: './notificationcomponent.html',
  styleUrl: './notificationcomponent.css',
})
export class Notificationcomponent implements OnInit {
  data = {
    id: 0,
      name: '',
    salary: 0,
  }
  constructor(private notification:  Notificationbackend, private snack: MatSnackBar) { }
  ngOnInit(): void {

  }
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  flagSpin = true;
  doSubmitForm() {
    console.log("Form Data", this.data.id);
    if (this.data.name == '' || this.data.salary == 0) {
      this.snack.open("Don't sent blank data", "OK");
      return;
    }
    this.flagSpin = false;
    this.notification.sendNoti(this.data).subscribe(
      response => {
        console.log(response);
        this.snack.open("Data Sent Successfully", "OK");
        this.flagSpin = true;
      },
      error => {
        console.log(error);
        this.snack.open("Error Data not sent: ", "OK");
        this.flagSpin = true;

      }
    );
  }
}
