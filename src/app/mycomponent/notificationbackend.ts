import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'

})
export class Notificationbackend {
    private baseUrl: string = "http://localhost:9091";
    private transactionUrl: string = "http://localhost:9090";

    constructor(private http: HttpClient) {
    }
    sendNoti(data: any) {
        return this.http.post(`${this.baseUrl}/getApiData/empData`, data, { responseType: 'text' });
    }
    getData() {
        return this.http.get(`${this.baseUrl}/getApiData`, { responseType: 'json' });
    }
    getCarData() {
        return this.http.get(`${this.baseUrl}/getApiData/carApiEndPoint`, { responseType: 'text' });
    }
    // Fetch transaction records from Spring Boot
    getTransactions() {
        return this.http.get<any[]>(
            `${this.transactionUrl}/v1/transaction/getAllTransactions`);
    }
    saveTransaction(data: any) {
        return this.http.post(`${this.transactionUrl}/v1/transaction/saveTransactions`, data, { responseType: 'text' });
    }
}