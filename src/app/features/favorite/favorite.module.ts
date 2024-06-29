import { FavoriteComponent } from './favorite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      component: FavoriteComponent
    }
  ]
@NgModule({
    declarations:[FavoriteComponent],
    imports:[CommonModule, RouterModule.forChild(routes)],
    exports:[FavoriteComponent],
})
export class FavoriteModule{}