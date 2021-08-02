import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentPageComponent } from './document-page/document-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent
  },
  {
    path: "videos",
    component: VideosPageComponent
  },
  {
    path: "music",
    component: MusicPageComponent
  },
  {
    path: "gallery",
    component: GalleryPageComponent
  },
  {
    path: "documents",
    component: DocumentPageComponent
  },
  {
    path: "other",
    component: OtherPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [
  HomePageComponent,
  VideosPageComponent,
  MusicPageComponent,
  GalleryPageComponent,
  DocumentPageComponent,
  OtherPageComponent
]; 