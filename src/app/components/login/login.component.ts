import { Component, OnInit } from '@angular/core';
import { authoService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:authoService) { }

  ngOnInit(): void {
    
  }
   SignIn(email:string,password:string){
this.login.SignIn(email,password);    
   }
}
