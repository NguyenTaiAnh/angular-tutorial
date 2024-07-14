import { AfterViewInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-table-field',
  templateUrl: './table-field.component.html',
  styleUrl: './table-field.component.scss'
})
export class TableFieldComponent implements AfterViewInit  {
  @ViewChildren('fieldTemplate') fieldTable?: QueryList<any>
  @Input() columns!: any[];

  constructor(){}
  ngAfterViewInit(): void {
    this.fieldTable?.forEach(item=>{
      console.log("sdfakdjhfakjldhfaljkdhfjakhdfljkạdhflạhsdf",item);
    })
  }
  action(data: any) {
    console.log(data); // Implement your action logic here
  }
}
