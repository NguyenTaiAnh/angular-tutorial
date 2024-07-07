import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-field',
  templateUrl: './table-field.component.html',
  styleUrl: './table-field.component.scss'
})
export class TableFieldComponent implements AfterViewInit  {
  @Input() dataList!: any[];
  @Input() columns!: any[];
  @Input() rowActions?: any[];
  @Input() trackByKey: any;

  constructor(){}
  ngAfterViewInit(): void {
    console.log("ccc",this.dataList);
  }
  action(data: any) {
    console.log(data); // Implement your action logic here
  }
}
