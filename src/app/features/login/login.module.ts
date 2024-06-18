import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NavbarModule } from '../../UI/navbar/navbar.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NavbarModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
