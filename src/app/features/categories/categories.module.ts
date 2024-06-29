import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";

const routes: Routes = [
    {
        path:'',
        component: CategoriesComponent
    }
]
@NgModule({
    declarations:[CategoriesComponent],
    imports:[CommonModule, RouterModule.forChild(routes)],
    exports: [CategoriesComponent],
})
export class CategoriesModule {}