import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeMediaItemComponent } from './home-media-item/home-media-item.component';
import { MaxlenPipe } from './maxlen.pipe';
import { DurationPipe } from './duration.pipe';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routeComponents,
    HomeMediaItemComponent,
    MaxlenPipe,
    DurationPipe,
    PageNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
