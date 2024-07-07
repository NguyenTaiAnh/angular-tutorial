import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";
import { Observable } from "rxjs";

export interface TableColumn {
  field?: string;

  header: string;

  search?:
    | 'text'
    | 'select_multiple'
    | 'select_search'
    | 'date'
    | 'date_range'
    | 'select';

  /** column data list, like as select options */
  dataList?: unknown[];

  dataListLabel?: string;

  /** Column sortable */
  sort?: boolean;

  /** Is custom display  */
  isCustom?: boolean;

  /** Is action button */
  isAction?: boolean;

  /** Is text ellipsis */
  isTextEllipsis?: boolean;

  /** Is text word-wrap:break-word; */
  isTextBreakWord?: boolean;
}

/** TableSearchObservableFunc params */
export interface TableSearchObservableParams {
    /** current page number */
    pageNumber: number;
  
    /** page size(limit) */
    pageSize: number;
  
    /** ng-zorro table filter */
    listOfFilter: NzTableFilterList;
    filterMultiple: boolean;
  
    /** sort filed name */
    sortField: string | undefined;
  
    /** sort order */
    sortOrder: 'ASC' | 'DESC';
  }
  export type TableSearchObservableFunc = (params: TableSearchObservableParams) => Observable<{
    total: number;
    content: unknown[];
  }>;
  export interface TablePaginator {
    /** Data count to display per page. */
    rows: number;
  
    currentPage: number;
  
    totalPages: number;
  
    /** Number of total records. */
    totalRecords: number;
  }
  