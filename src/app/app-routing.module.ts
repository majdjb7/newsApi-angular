import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheadingComponent } from './topheading/topheading.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {path:'', component:TopheadingComponent}, //home
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  declarations: []
})
export class AppRoutingModule { }
