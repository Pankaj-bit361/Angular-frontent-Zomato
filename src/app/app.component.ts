import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { isLocalStorageAvailable } from 'ngx-webstorage-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zomatofrontend';
  
  val:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  // constructor(private localStorage:isLocalStorageAvailable) {}

  ngOnInit() {
    // this.val = JSON.parse(localStorage.getItem('user') || "null");
// this.updateLogin() 

  }

// updateLogin(){
//   const isLoggIn=!!this.localStorage.get("user")
// this.val.next(isLoggIn)
// }



  }




