import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    // NzPageHeaderModule,
    // NzBreadCrumbModule,
    HttpClientModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
