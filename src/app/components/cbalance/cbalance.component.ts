import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CDetailsService } from 'src/app/service/cdetails.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cbalance',
  templateUrl: './cbalance.component.html',
  styleUrls: ['./cbalance.component.css']
})
export class CBalanceComponent implements OnInit {

  constructor(private login:LoginService, private snack:MatSnackBar, private cdetail:CDetailsService){}

  public balance = ''
  public accountnumber=''
  public ifsccode=''
  public branch=''
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
                      this.balance=r.balance;
                      this.accountnumber=r.accountnumber;
                      this.ifsccode=r.ifscCode;
                      this.branch=r.branch;
                      
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

  
}
