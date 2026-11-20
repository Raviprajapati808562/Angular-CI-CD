
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Notificationbackend } from '../mycomponent/notificationbackend';

@Component({
  selector: 'app-aichatcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aichatcomponent.html',
  styleUrl: './aichatcomponent.css',
})
export class Aichatcomponent {

  question: string = '';
  messages: { text: string; sender: string }[] = [];

  loading: boolean = false;

  constructor(private backend: Notificationbackend) {}

  sendMessage() {

    if (!this.question.trim() || this.loading) {
      return;
    }

    const userQuestion = this.question;

    this.messages.push({
      text: userQuestion,
      sender: 'user'
    });

    this.question = '';
    this.loading = true;

    this.backend.askAI(userQuestion).subscribe({
      next: (response: string) => {

        this.messages.push({
          text: response,
          sender: 'bot'
        });

        this.loading = false;
      },

      error: (error) => {

        this.messages.push({
          text: 'Unable to connect to AI server. Please try again.',
          sender: 'bot'
        });

        console.error(error);
        this.loading = false;
      }
    });
  }
}
