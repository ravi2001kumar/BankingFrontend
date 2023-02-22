import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:9909";

  constructor(private http:HttpClient) { }

  addCustomer(data:any){
    return this.http.post(`${this.baseUrl}/Addcustomer`,data)
  }

  token(data:any){
    return this.http.post(`${this.baseUrl}/token`,data)
  }
  setToken(token:any){
    localStorage.setItem("token",token)
    return true;
  }
  getToken(){
  return localStorage.getItem("token")
  }

  getUsername(){
    let token=this.getToken();
    // console.log(token)
    return this.http.post(`${this.baseUrl}/token/get`,token)
  }
  getDetails(username:any){
    
    return this.http.get(`${this.baseUrl}/customer/username/${username}`)
  }

  isLogIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
    
  }

  logout(){
    localStorage.removeItem("token")
  }

}
