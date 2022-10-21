import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class authoService {

  constructor(private firebaseautho:AngularFireAuth) { }

  async SignIn(email:string,password:string){
    
    await this.firebaseautho.signInWithEmailAndPassword(email,password).then(res=>{
     
    }).catch(res=>{alert(res)})
  }
}
