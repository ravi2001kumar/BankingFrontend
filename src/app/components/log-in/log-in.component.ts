import { Component } from '@angular/core';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private login:LoginService,private snack:MatSnackBar){}
  data={
    username:"",
    password:""
  }

  doSubmit(){
    this.login.token(this.data).subscribe(
      {
        next:(r:any)=>{
          console.log(r);
          this.login.setToken(r.token)
          window.location.href="/"
          this.snack.open("login sucessfully",'x')
        },
        error:(e)=>{
          this.snack.open(e.error.errorMessage,'close')
        }
      }
    )
  }
}
