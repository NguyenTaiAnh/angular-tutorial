import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TestDirectiveDirective } from '../../shared/directive/test-directive.directive';
import { CardModule } from '../../UI/card/card.module';
import { NavbarModule } from '../../UI/navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, TestDirectiveDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    CardModule,
    NzGridModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
