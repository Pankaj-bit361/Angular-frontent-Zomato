import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fetchdata } from './fetchdata';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url:string="https://zomato-kj4c.onrender.com/menu"
  data:fetchdata[]=[]
 constructor( private http:HttpClient){

 }





ngOnInit(){
this.fetchProducts()
}

 private fetchProducts(){
 
   this.http.get<fetchdata[]>(this.url)
   .subscribe((res)=>{
     this.data=res
     console.log(this.data)
   })
 }  


private handleOrder(){
  this.http.post
}


}
