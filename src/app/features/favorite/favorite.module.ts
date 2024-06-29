import { FavoriteComponent } from './favorite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[FavoriteComponent],
    imports:[CommonModule],
    exports:[FavoriteComponent],
})
export class FavoriteModule{}