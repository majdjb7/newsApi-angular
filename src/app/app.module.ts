import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopheadingComponent } from './topheading/topheading.component';

import {NewsapiservicesService} from './service/newsapiservices.service';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path:'',
         redirectTo:'app',
         pathMatch:'full',
      },
      {
         path:'app',
         component:AppComponent
      }
    ]),
    HttpModule,
    AppRoutingModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
