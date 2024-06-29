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