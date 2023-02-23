import { Component, OnInit } from '@angular/core';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { PayeeService } from 'src/app/service/payee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { CDetailsService } from 'src/app/service/cdetails.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {

  constructor(private detail:PayeeService,private snack:MatSnackBar,public datepipe: DatePipe , private cdetail:CDetailsService,private login:LoginService){}
  currentDate:any=this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss')
  ngOnInit(): void{

    this.data.date=this.currentDate
    this.login.getUsername().subscribe(
      {
        next:(r:any)=>{
          this.login.getDetails(r.username).subscribe(
            {
              next:(a:any)=>{
                this.cdetail.getCustomerByUser(a).subscribe(
                  {
                    next:(b:any)=>{
                      this.data.accountFrom=b.accountnumber;
                    },
                    error:(e)=>{
                      console.log(e);
                    }
                  }
                )
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
    // this.detail.findTransaction(this.data).subscribe(
    //   {
    //     next:(r:any)=>{
    //       this.detail.getTransaction(r.accountFrom).subscribe(
    //         {
    //           next:(r:any)=>{
    //             this.data=r;
    //           },
    //           error:(e)=>{
    //             this.snack.open(e.error.errorMessage,'close')
    //           }
    //         }
    //       )
          
    //     },
    //     error:(e)=>{
    //       this.snack.open(e.error.errorMessage,'close')
    //     }
    //   }
    // )
  }
  data={
    accountTo:"",
    accountFrom:"",
    amount:"",
    bankName:"",
    ifscCode:"",
    accHolderName:"",
    date:""
  }

  doSubmit(){
    this.detail.ThirdPartyTransfer(this.data).subscribe(
      {
        next:(r)=>{
          console.log(r);
          this.snack.open("Transaction Done Sucessfully",'x')
        },
        error:(e)=>{
          this.snack.open(e.error.errorMessage,'close')
        }
      }
    )
  }

  getDetails(){
    this.cdetail.getCustomerAccount(this.data.accountTo).subscribe(
      {
        next:(r:any)=>{
          console.log(r);
          this.data.accHolderName=r.user.name;
        },
        error:(e)=>{
          console.log(e);
        }
      }
    )
  }
}


