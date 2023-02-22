
import { Component, OnInit } from '@angular/core';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private detail:TransactionService,private snack:MatSnackBar,public datepipe: DatePipe ){}
  currentDate:any=this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss')
  ngOnInit(): void{

    this.data.date=this.currentDate
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
    date:""
  }

  doSubmit(){
    this.detail.Transaction(this.data).subscribe(
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
}

