import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheadingComponent } from './topheading/topheading.component';
import { RouterModule, Routes } from '@angular/router'
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component'


const routes: Routes = [
  {path:'', component:TopheadingComponent}, //home
  {path:'tech', component:TechnewsComponent}, //tech news
  {path:'business', component:BusinessnewsComponent}, //business news


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  declarations: []
})
export class AppRoutingModule { }
