import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableFieldModule } from "../table-field/table-field.module";

@NgModule({
    declarations:[TableComponent],
    imports:[CommonModule,NzTableModule, TableFieldModule],
    exports:[TableComponent],
})

export class TableModule{}