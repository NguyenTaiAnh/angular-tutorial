import { AfterContentInit, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import {
  TableColumn,
  TableSearchObservableFunc,
} from '../../core/models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log("check data:L , ", this.columns);
  }
  @Input() rowActions?: any[]; // Hành động trên mỗi hàng
  @Input() rowSelection?: any; // Lựa chọn hàng
  @Output() rowSelectionChange = new EventEmitter<any>(); // Sự kiện thay đổi lựa chọn hàng

  @Input() columns: any[] = [];
  /** Data list */
  @Input() dataList: any[] = [];
  /** Search Observable Higher-Order Functions, lazy only */
  @Input() searchObservableFunc?: () => TableSearchObservableFunc;
  /** Is show total results */
  @Input() showTotalResults = false;
  /** Is loaded (for not lazy) */
  @Input() isLoaded = false;
  fieldTemplateList?: TemplateRef<any>[] = [];

  /** A property to uniquely identify a record in data. */
  @Input() dataKey = '';
  /** Table data changed event, lazy only */
  // @Output() dataChange = new EventEmitter();
  /** Is API loaded (lazy) */
  isLazyLoaded = false;
  
  trackByKey(index:number): number {
    return index
  }
  onRowSelectionChange(event: any) {
    this.rowSelectionChange.emit(event);
  }
  action(data:any){
    console.log(data);
  }
}
