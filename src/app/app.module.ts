import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { AppRoutingModule } from './app.routes';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule, //fix error icon ng-zorro
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzIconModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
