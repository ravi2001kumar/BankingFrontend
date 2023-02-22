import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CDetailsService {
  private baseUrl="http://localhost:9901";

  constructor(private http:HttpClient) { }

  addCustomer(data:any){
    return this.http.post(`${this.baseUrl}/Addcustomer`,data)
  }

  getCustomerAccount(accountnumber:any){
    return this.http.get(`${this.baseUrl}/customer/accountnumber/${accountnumber}`)
  }
  getCustomerByUser(user:any){
    return this.http.post(`${this.baseUrl}/customer/user`,user)
  }

}
