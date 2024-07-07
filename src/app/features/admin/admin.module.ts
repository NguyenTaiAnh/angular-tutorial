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
import { AdminRoutingModule } from './admin-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SettingComponent } from './setting/setting.component';
import { TableModule } from '../../UI/table/table.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@NgModule({
  declarations: [AdminComponent, StoriesComponent, CategoriesComponent, AuthorsComponent, UsersComponent, CommentsComponent, ChaptersComponent, DashboardComponent, SettingComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzIconModule,
    AdminRoutingModule,
    TableModule,
    TranslateModule
  ],
  exports:[AdminComponent]
})
export class AdminModule { }
