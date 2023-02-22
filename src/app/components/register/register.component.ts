import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private login:LoginService,private snack:MatSnackBar){}

  data={
    username:"",
    password:"",
    name:"",
    contactNo:"",
    dob:"",
    email:"",
    pin:"",
    age:""
  }

  doSubmit(){
    this.login.addCustomer(this.data).subscribe(
      {
        next:(r)=>{
          console.log(r);
          window.location.href="/login"
          this.snack.open("profile created sucessfully",'x')
          
        },
        error:(e)=>{
          this.snack.open(e.error.errorMessage,'close')
        }
      }
    )
  }
}
