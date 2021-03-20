import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top/top-page.component';
import { HttpPageComponent } from './pages/http-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    HttpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
