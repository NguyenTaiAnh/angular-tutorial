import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
    declarations:[TableComponent],
    imports:[CommonModule,NzTableModule],
    exports:[TableComponent],
})

export class TableModule{}