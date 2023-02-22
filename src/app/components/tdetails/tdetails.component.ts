import { Component,OnInit } from '@angular/core';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { CDetailsService } from 'src/app/service/cdetails.service';

@Component({
  selector: 'app-tdetails',
  templateUrl: './tdetails.component.html',
  styleUrls: ['./tdetails.component.css']
})
export class TDetailsComponent implements OnInit {
  mssg:undefined|String;
  constructor(private detail:TransactionService,private snack:MatSnackBar,private login:LoginService,private cdetail:CDetailsService){}
  data:{id: number, accountTo: string, accountFrom: string, amount: number, date: string}[]=[]
  cdata={accountnumber:''
  }
  ngOnInit(): void {

    this.login.getUsername().subscribe(
      {
        next:(a:any)=>{
          this.login.getDetails(a.username).subscribe(
            {
              next:(b:any)=>{
                this.cdetail.getCustomerByUser(b).subscribe(
                  {
                    next:(r:any)=>{
                      console.log(r)
                      this.cdata=r;
                      
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

   
  }

  

  show(){
    this.data.length=0
    this.detail.getTransaction().subscribe(
      {
      next:(r:any)=>{
        for(let i of r){
          if(i.accountFrom==this.cdata.accountnumber || i.accountTo==this.cdata.accountnumber){
            this.data.push(i)
          }
        }
        // this.snack.open("All Details are Shown!!")
        
      },
      error:(e)=>{
        this.snack.open(e.error.errorMessage,'close')
      }
    }
    )
  }

  

}
