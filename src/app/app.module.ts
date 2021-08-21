import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeMediaItemComponent } from './home-media-item/home-media-item.component';
import { MaxlenPipe } from './maxlen.pipe';
import { DurationPipe } from './duration.pipe';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { VideosPageContentComponent } from './videos-page-content/videos-page-content.component';
import { VideosPageRawTabComponent } from './videos-page-raw-tab/videos-page-raw-tab.component';
import { VideosPageCollectionsTabComponent } from './videos-page-collections-tab/videos-page-collections-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routeComponents,
    HomeMediaItemComponent,
    MaxlenPipe,
    DurationPipe,
    PageNavigationComponent,
    VideosPageContentComponent,
    VideosPageRawTabComponent,
    VideosPageCollectionsTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
