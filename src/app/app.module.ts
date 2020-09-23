import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DashboardComponent
  ]
})
export class AppModule { }
