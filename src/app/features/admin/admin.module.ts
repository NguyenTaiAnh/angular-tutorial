import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { StoriesComponent } from './stories/stories.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminComponent, StoriesComponent, CategoriesComponent, AuthorsComponent, UsersComponent, CommentsComponent, ChaptersComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[AdminComponent]
})
export class AdminModule { }
