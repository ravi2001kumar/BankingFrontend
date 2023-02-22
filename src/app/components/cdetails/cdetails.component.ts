import { Component, OnInit } from '@angular/core';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { CDetailsService } from 'src/app/service/cdetails.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cdetails',
  templateUrl: './cdetails.component.html',
  styleUrls: ['./cdetails.component.css']
})
export class CDetailsComponent implements OnInit {

  constructor(private detail:CDetailsService,private snack:MatSnackBar ,private login:LoginService){}

  ngOnInit(): void{
    this.login.getUsername().subscribe(
      {
        next:(r:any)=>{
          this.login.getDetails(r.username).subscribe(
            {
              next:(r:any)=>{
                this.data.userId=r.id;
                this.data.user=r;
              },
              error:(e)=>{
                this.snack.open(e.error.errorMessage,'close')
              }
            }
          )
          
        },
        error:(e)=>{
          this.snack.open(e.error.errorMessage,'close')
        }
      }
    )
  }
  data={
    userId:"",
    user:"",
    accountnumber:"",
    ifscCode:"",
    balance:"",
    branch:""

  }

  doSubmit(){
    this.detail.addCustomer(this.data).subscribe(
      {
        next:(r)=>{
          
          console.log(this.data);
          console.log(r);
          window.location.href="/balance"
          this.snack.open("Customer Created Sucessfully",'x')
        },
        error:(e)=>{
          this.snack.open(e.error.errorMessage,'close')
        }
      }
    )
  }
}
