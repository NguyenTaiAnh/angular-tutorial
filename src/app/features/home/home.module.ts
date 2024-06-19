import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestDirectiveDirective } from '../../shared/directive/test-directive.directive';
import { NavbarModule } from '../../UI/navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, TestDirectiveDirective],
  imports: [CommonModule, HomeRoutingModule, NavbarModule],
  exports: [HomeComponent],
})
export class HomeModule {}
