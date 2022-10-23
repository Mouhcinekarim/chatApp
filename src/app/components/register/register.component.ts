import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }  

  onRegister(email: string, password: string){
    this.authService.register(email, password);
  }

}
