import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AllComp/home/home.component';
import { AboutComponent } from './AllComp/about/about.component';
import { OrderComponent } from './AllComp/order/order.component';
import { LoginComponent } from './AllComp/login/login.component';
import { FormsModule } from '@angular/forms';
import { SingupComponent } from './AllComp/singup/singup.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OrderComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
