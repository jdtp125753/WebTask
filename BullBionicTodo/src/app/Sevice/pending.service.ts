import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const pendingBase = 'http://localhost:3000/Pending'

@Injectable({
  providedIn: 'root',
})
export class PendingService {
  pending: any;
  constructor(private http: HttpClient) {}

  getPendingsActive(): Observable<any>{
    return this.http.get<any>(`${pendingBase}?classification=active`);
  }

  getPendingsSheduled(): Observable<any>{
    return this.http.get<any>(`${pendingBase}?classification=scheduled`);
  }

  getPendingsComplete(): Observable<any>{
    return this.http.get<any>(`${pendingBase}?classification=completed`);
  }

  getPendingsAll():Observable<any>{
    return this.http.get<any>(`${pendingBase}`); 
  }
}
