import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AllComp/home/home.component';
import { LoginComponent } from './AllComp/login/login.component';
import { AboutComponent } from './AllComp/about/about.component';
import { OrderComponent } from './AllComp/order/order.component';
import { SingupComponent } from './AllComp/singup/singup.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:OrderComponent,
    path:"order"
  },
   {
    component:SingupComponent,
    path:"signup"
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
