
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Notificationbackend } from '../mycomponent/notificationbackend';

@Component({
  selector: 'app-aichatcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aichatcomponent.html',
  styleUrl: './aichatcomponent.css'
})
export class Aichatcomponent {

  question = '';

  messages = signal<{ text: string; sender: string }[]>([]);

  loading = signal(false);

  constructor(private backend: Notificationbackend) {}

  sendMessage() {

    const userQuestion = this.question.trim();

    if (!userQuestion || this.loading()) {
      return;
    }

    this.messages.update(oldMessages => [
      ...oldMessages,
      { text: userQuestion, sender: 'user' }
    ]);

    this.question = '';
    this.loading.set(true);

    this.backend.askAI(userQuestion).subscribe({

      next: (response: string) => {

        console.log('AI RESPONSE:', response);

        this.messages.update(oldMessages => [
          ...oldMessages,
          { text: response, sender: 'bot' }
        ]);

        this.loading.set(false);

      },

      error: (error) => {

        console.error('AI ERROR:', error);

        this.messages.update(oldMessages => [
          ...oldMessages,
          {
            text: 'Unable to connect to AI server. Please try again.',
            sender: 'bot'
          }
        ]);

        this.loading.set(false);
      }
    });
  }
}
