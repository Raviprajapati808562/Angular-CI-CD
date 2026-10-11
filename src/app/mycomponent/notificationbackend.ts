import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'

})
export class Notificationbackend {
    private baseUrl: string = "http://localhost:9091";
    constructor(private http: HttpClient) {
    }
    sendNoti(data: any) {
        return this.http.post(`${this.baseUrl}/getApiData/empData`, data, { responseType: 'text' });
    }
    getData() {
        return this.http.get(`${this.baseUrl}/getApiData`, { responseType: 'json' });
    }
}