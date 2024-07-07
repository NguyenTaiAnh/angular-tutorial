import { Component, Injector, OnInit } from '@angular/core';
import { TableColumn } from '../../core/models/table.model';
import { TableColumnMapping, TABLE_COLUMN_MAPPING } from '../../core/token/table-column-mapping.token';
import { BaseComponent } from './base.component';

@Component({
  template: '',
})
export abstract class BaseListComponent extends BaseComponent implements OnInit {
  tableColumn: TableColumn[] = [];

  tableDataList: unknown[] = [];

//   protected tableService: TableService;

  protected tableColumnMapping: TableColumnMapping;

  constructor(injector: Injector) {
    super(injector);

    // this.tableService = injector.get(TableService);
    this.tableColumnMapping = injector.get(TABLE_COLUMN_MAPPING);
  }

  ngOnInit(): void {
    // this.createTableColumn();
  }

  /**
   * Table Data change
   *
   * @param event - banner data list
   * @returns void
   */
  onTableDataChange(event: unknown[]): void {
    this.tableDataList = event;
  }

  /**
   * Create table column
   *
   * @returns void
   */
  // createTableColumn(): void {
  //   this.tableColumn = [];
  // }
}
