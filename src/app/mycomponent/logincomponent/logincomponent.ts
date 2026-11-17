
import { Component ,ChangeDetectorRef} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Notificationbackend } from '../notificationbackend';


@Component({
  selector: 'logincomponent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css',
})

export class Logincomponent {

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private notificationbackend: Notificationbackend,
    private cdr: ChangeDetectorRef
  ) {}

  // Controls login and OTP screens
  isOtpScreen = false;
  isLoading = false;

  // OTP challenge details
  challengeId = '';
  maskedMobile = '';

  // Login details
  userData = {
    email: '',
    password: ''
  };

  // OTP details
  otpData = {
    otp: ''
  };

  // STEP 1: Validate email and password
  login(data: any) {

    if (!data.email || !data.password) {
      this.snack.open(
        'Please enter email and password',
        'OK',
        { duration: 2000 }
      );
      return;
    }

    this.isLoading = true;

    this.notificationbackend.login(data).subscribe({

     next: (response: any) => {

  this.isLoading = false;

  this.challengeId = response.challengeId;
  this.maskedMobile = response.maskedMobile;

  this.isOtpScreen = true;

  this.cdr.detectChanges();

  console.log('OTP Screen:', this.isOtpScreen);
  console.log('Challenge ID:', this.challengeId);
  console.log('Mobile:', this.maskedMobile);

  this.snack.open(
    'OTP sent to your registered mobile number',
    'OK',
    { duration: 3000 }
  );
},

      error: (error: any) => {

        this.isLoading = false;

        this.snack.open(
          error.error?.message || 'Invalid credentials',
          'OK',
          { duration: 3000 }
        );
      }
    });
  }

  // STEP 2: Verify OTP
  verifyOtp() {

    if (!this.challengeId) {
      this.snack.open(
        'Please login again to generate an OTP',
        'OK',
        { duration: 2000 }
      );
      return;
    }

    if (!/^\d{6}$/.test(this.otpData.otp)) {
      this.snack.open(
        'Enter a valid 6-digit OTP',
        'OK',
        { duration: 2000 }
      );
      return;
    }

    this.isLoading = true;

    this.notificationbackend.verifyOtp({
      challengeId: this.challengeId,
      otp: this.otpData.otp
    }).subscribe({

      next: (response: any) => {

        this.isLoading = false;

        this.snack.open(
          'Login Successful',
          'OK',
          { duration: 2000 }
        );

        // Navigate only after successful backend verification
        this.router.navigate(['/SendNLogin']);
      },

      error: (error: any) => {

        this.isLoading = false;

        this.snack.open(
          error.error?.message || 'Invalid or expired OTP',
          'OK',
          { duration: 3000 }
        );
      }
    });
  }

  // Return to login screen
  backToLogin() {

    this.isOtpScreen = false;
    this.otpData.otp = '';
    this.challengeId = '';
    this.maskedMobile = '';
  }

  btnClick() {
    this.snack.open('Hey you clicked me', 'Cancel');
  }
}
