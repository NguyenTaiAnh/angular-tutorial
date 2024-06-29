import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: ()=> import('./features/home/home.module').then((m)=> m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then((m)=> m.LoginModule)
      },
      {
        path:'admin',
        loadChildren: ()=> import('./features/admin/admin.module').then((m)=> m.AdminModule)
      },
      {
        path:'categories',
        loadChildren: ()=> import('./features/categories/categories.module').then((m)=> m.CategoriesModule)
      },
      {
        path:'favorite',
        loadChildren: ()=> import('./features/favorite/favorite.module').then((m)=> m.FavoriteModule)
      },
      {
        path:'history',
        loadChildren: ()=> import('./features/history/history.module').then((m)=> m.HistoryModule)
      },
      {
        path:'profile',
        loadChildren:()=> import('./features/profile/profile.module').then((m)=> m.ProfileModule)
      },
      
    
      // Nonexistent route
      {
        path: '**',
        redirectTo: '/home',
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}