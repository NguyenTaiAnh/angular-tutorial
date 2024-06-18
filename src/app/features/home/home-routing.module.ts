import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    // {
    //     path: '/detail',
    //     component: DetailComponent
    // }
    
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule {}