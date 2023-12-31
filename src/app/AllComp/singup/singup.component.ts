import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

export interface SignupFrom{
  username:string
  email:string
  password:string
}



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})



export class SingupComponent {

  username:string=""
  email:string=""
  password:string=""

  constructor(private apiservice:ApiService,private router:Router){}
  

  teleport(){
    console.log("hello")
    this.router.navigate(["/login"])
     }
    
  SignupUser(){
    const Signupdata={
      username:this.username,
      email:this.email,
      password:this.password
    }


this.apiservice.SignupDo(Signupdata).subscribe((res)=>{
  console.log(res)

})



  }

}
