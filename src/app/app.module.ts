import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeMediaItemComponent } from './home-media-item/home-media-item.component';
import { MaxlenPipe } from './maxlen.pipe';
import { DurationPipe } from './duration.pipe';
import { VideosPageContentComponent } from './videos-page-content/videos-page-content.component';
import { VideosPageRawTabComponent } from './videos-page-raw-tab/videos-page-raw-tab.component';
import { VideosPageCollectionsTabComponent } from './videos-page-collections-tab/videos-page-collections-tab.component';
import { HomeSearchFilterComponent } from './home-page/home-search-filter/home-search-filter.component';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from './shared/widgets/widgets.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routeComponents,
    HomeMediaItemComponent,
    MaxlenPipe,
    DurationPipe,
    VideosPageContentComponent,
    VideosPageRawTabComponent,
    VideosPageCollectionsTabComponent,
    HomeSearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
