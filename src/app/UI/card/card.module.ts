import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, NzGridModule, NzCardModule, NzListModule],
  exports: [CardComponent],
})
export class CardModule {}
