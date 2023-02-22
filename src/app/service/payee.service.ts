import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {

  private baseUrl="http://localhost:9905";
  constructor(private http:HttpClient) { }

  ThirdPartyTransfer(data:any){
    return this.http.post(`${this.baseUrl}/PayeeTransfer`,data)
  }

  getTPTransaction(){
    return this.http.get(`${this.baseUrl}/AllPayee`)
  }
}
