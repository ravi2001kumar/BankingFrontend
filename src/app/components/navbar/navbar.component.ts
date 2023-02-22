import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isToken=false;
  constructor(private login:LoginService){}

ngOnInit(): void {
    if(this.login.isLogIn()){
      this.isToken=true;
    }
}
logout(){
  this.login.logout();
  window.location.href="/"
}
}
