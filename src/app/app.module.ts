import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './components/register/register.component';
import { PayeeComponent } from './components/payee/payee.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CDetailsComponent } from './components/cdetails/cdetails.component';
import { DatePipe } from '@angular/common';
import { TDetailsComponent } from './components/tdetails/tdetails.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PDetailsComponent } from './components/pdetails/pdetails.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CBalanceComponent } from './components/cbalance/cbalance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    PayeeComponent,
    TransactionComponent,
    CDetailsComponent,
    TDetailsComponent,
    PDetailsComponent,
    FooterComponent,
    CBalanceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
 

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
