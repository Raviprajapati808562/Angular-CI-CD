import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fileuploadcomponent.html',
  styleUrl: './fileuploadcomponent.css',
})
export class FileUploadComponent implements OnInit {

  selectedFile: File | null = null;
  uploading = false;
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const savedMessage = sessionStorage.getItem('uploadMessage');

    if (savedMessage) {
      this.message = savedMessage;
      sessionStorage.removeItem('uploadMessage');
    }
  }

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) {
    this.selectedFile = null;
    return;
  }

  const fileName = file.name.toUpperCase();

  // Validate filename prefix
  if (!fileName.startsWith('EMPDATA')) {
    alert('Invalid filename! The Excel filename must start with EMPDATA.');
    this.selectedFile = null;
    input.value = '';
    return;
  }

  // Validate Excel extension
  const allowedExtensions = ['xlsx', 'xls'];
  const extension = file.name.split('.').pop()?.toLowerCase();

  if (!extension || !allowedExtensions.includes(extension)) {
    alert('Only Excel files (.xlsx or .xls) are allowed.');
    this.selectedFile = null;
    input.value = '';
    return;
  }

  this.selectedFile = file;
  this.message = '';
}

  uploadFile(): void {
    if (!this.selectedFile) {
      this.message = 'Please select a file first.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.uploading = true;
    this.message = 'Uploading file...';

    this.http.post(
      'http://localhost:9091/getApiData/uploadFile',
      formData,
      { responseType: 'text' }
    ).subscribe({
      next: (response: string) => {
        this.uploading = false;
        this.message = response;

        // Save message before refreshing
        sessionStorage.setItem('uploadMessage', response);

        // Display the success message for 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },

      error: (error) => {
        this.uploading = false;
        this.message =
          typeof error.error === 'string'
            ? error.error
            : 'Upload failed.';
      }
    });
  }
}
