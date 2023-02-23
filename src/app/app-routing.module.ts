import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PayeeComponent } from './components/payee/payee.component';
import { CDetailsComponent } from './components/cdetails/cdetails.component';
import { TDetailsComponent } from './components/tdetails/tdetails.component';
import { PDetailsComponent } from './components/pdetails/pdetails.component';
import { CBalanceComponent } from './components/cbalance/cbalance.component';
import { PayeedetailsComponent } from './components/payeedetails/payeedetails.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LogInComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'transaction',
    component:TransactionComponent,
    pathMatch:'full'
  },
  {
    path:'payee',
    component:PayeeComponent,
    pathMatch:'full'
  },
  {
    path:'details',
    component:CDetailsComponent,
    pathMatch:'full'
  },
  {
    path:'transactiondetails',
    component:TDetailsComponent,
    pathMatch:'full'
  },
  {
    path:'tptdetails',
    component:PDetailsComponent,
    pathMatch:'full'
  },
  {
    path:'balance',
    component:CBalanceComponent,
    pathMatch:'full'
  },
  {
    path:'payeedetails',
    component:PayeedetailsComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [
  CommonModule,  
  BrowserModule,
  RouterModule.forRoot(routes,{
    useHash: true
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
