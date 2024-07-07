import { Component, Injectable } from '@angular/core';
import { AuthorsComponent } from '../../../features/admin/authors/authors.component';
import { CategoriesComponent } from '../../../features/admin/categories/categories.component';
import { ChaptersComponent } from '../../../features/admin/chapters/chapters.component';
import { DashboardComponent } from '../../../features/admin/dashboard/dashboard.component';
import { SettingComponent } from '../../../features/admin/setting/setting.component';
import { StoriesComponent } from '../../../features/admin/stories/stories.component';
import { UsersComponent } from '../../../features/admin/users/users.component';
import { AdminTabs } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminConfigService {
  tabs(): AdminTabs[] {
    return [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        component: DashboardComponent
      },
      {
        name: 'Stories',
        icon: '',
        component: StoriesComponent
      },
      {
        name: 'Chapters',
        icon: '',
        component: ChaptersComponent
      },
      {
        name: 'Authors',
        icon: '',
        component: AuthorsComponent
      },
      {
        name: 'categories',
        icon: '',
        component: CategoriesComponent
      },
      {
        name: 'Users',
        icon: 'user',
        component: UsersComponent
      },
      {
        name: 'Setting',
        icon: '',
        component: SettingComponent
      },
    ];
  }
}
