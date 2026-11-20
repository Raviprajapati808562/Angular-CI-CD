
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Notificationbackend {

  private baseUrl: string = "http://localhost:9092";
  private transactionUrl: string = "http://localhost:9091";

  constructor(private http: HttpClient) {}

  sendNoti(data: any) {
    return this.http.post(
      `${this.baseUrl}/getApiData/empData`,
      data,
      { responseType: 'text' }
    );
  }

  getData() {
    return this.http.get(`${this.baseUrl}/getApiData`, {
      responseType: 'json'
    });
  }

  getCarData() {
    return this.http.get(
      `${this.baseUrl}/getApiData/carApiEndPoint`,
      { responseType: 'text' }
    );
  }

  getTransactions() {
    return this.http.get<any[]>(
      `${this.transactionUrl}/v1/transaction/getAllTransactions`
    );
  }

  saveTransaction(data: any) {
    return this.http.post(
      `${this.transactionUrl}/v1/transaction/saveTransactions`,
      data,
      { responseType: 'text' }
    );
  }

  // Step 1: Validate email and password, then send SMS OTP
  login(data: any) {
    return this.http.post<any>(
      `${this.transactionUrl}/auth/login`,
      data
    );
  }

  // Step 2: Verify SMS OTP
  verifyOtp(data: any) {
    return this.http.post<any>(
      `${this.transactionUrl}/auth/verify-otp`,
      data
    );
  }
 askAI(question: string) {
  return this.http.post(
    `${this.transactionUrl}/ai/api/ask`,
    { question },
    { responseType: 'text' }
  );
}
}
