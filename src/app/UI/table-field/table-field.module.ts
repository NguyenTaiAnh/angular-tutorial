import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFieldComponent } from './table-field.component';



@NgModule({
  declarations: [TableFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [TableFieldComponent]
})
export class TableFieldModule { }
