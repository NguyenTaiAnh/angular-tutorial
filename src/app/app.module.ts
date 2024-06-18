import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './core/services/theme.service';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    NzButtonModule,
    FormsModule,
    HomeModule,
    LoginModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
