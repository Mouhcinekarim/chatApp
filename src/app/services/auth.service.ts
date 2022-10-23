import { UserCredential } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseauth: AngularFireAuth) { }

  async login(email: string, password: string){

    await this.firebaseauth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log(res);
    }).catch(res=>{alert(res)})
  }

  async register(email: string, password: string){
    await this.firebaseauth.createUserWithEmailAndPassword(email, password).then(
      res => console.log(res)
    );
  }
}
