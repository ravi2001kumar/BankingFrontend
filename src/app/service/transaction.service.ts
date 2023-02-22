import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl="http://localhost:9903";

  constructor(private http:HttpClient) { }

  Transaction(data:any){
    return this.http.post(`${this.baseUrl}/Transaction`,data)
  }

  getTransaction(){
    return this.http.get(`${this.baseUrl}/AllTransaction`)
  }

  findTransaction(data:any){
    return this.http.get(`${this.baseUrl}/AllTransaction`,data)
  }

  deleteTransaction(){
    return this.http.delete(`${this.baseUrl}//Transaction/{id}`)
  }
}
