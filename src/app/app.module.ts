import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './core/services/theme.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,
    NzButtonModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
