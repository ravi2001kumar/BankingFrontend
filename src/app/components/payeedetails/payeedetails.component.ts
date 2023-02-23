import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CDetailsService } from 'src/app/service/cdetails.service';
import { LoginService } from 'src/app/service/login.service';
import { PayeeService } from 'src/app/service/payee.service';

@Component({
  selector: 'app-payeedetails',
  templateUrl: './payeedetails.component.html',
  styleUrls: ['./payeedetails.component.css']
})
export class PayeedetailsComponent implements OnInit {

  constructor(private detail:PayeeService, private snack:MatSnackBar,private login:LoginService,private cdetail:CDetailsService){}

  data:{id: number, accountTo: string, accountFrom: string,bankName: string ,amount: number,accHolderName: String, date: string,ifscCode: string}[]=[]
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
    this.detail.getTPTransaction().subscribe(
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

