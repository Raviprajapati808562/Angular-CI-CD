import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'logincomponent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css',
})

export class Logincomponent implements OnInit {
  constructor(private snack: MatSnackBar, private router: Router) { }
  ngOnInit(): void {
    
  }
  userData = {
    email: '',
    password: ''
  };
 

  login(data: any) {
    console.log(data);
    if (data.email === 'raviravikumart@gmail.com' && data.password === '1234') {

      this.snack.open("Login Successful", "OK", {
        duration: 2000
      });

      this.router.navigate(['/SendNLogin']);

    } else {

      this.snack.open("Invalid Credentials , Please enter valid credenatials ", "OK", {
        duration: 2000
      });

    }
  }
  btnClick() {
    console.log("btn click me");
    this.snack.open("Hey you clicked me ", "Cancle");
  }
}
