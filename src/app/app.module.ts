import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routeComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
