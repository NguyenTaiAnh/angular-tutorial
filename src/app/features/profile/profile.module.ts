import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      component: ProfileComponent
    }
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[ProfileComponent]
})
export class ProfileModule { }
