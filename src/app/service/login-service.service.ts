import { UserCredential } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseautho:AngularFireAuth) { }

  async login(email:string,password:string){
    
    await this.firebaseautho.signInWithEmailAndPassword(email,password).then(res=>{
     
    }).catch(res=>{alert(res)})
  }

  async register(email: string, password: string){
    await this.firebaseautho.signInWithEmailAndPassword(email,password).then(
      res => console.log(res)
    );
  }
}
