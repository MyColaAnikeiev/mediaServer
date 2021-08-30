import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DocumentPageComponent } from './document-page/document-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { OtherPageComponent } from './other-page/other-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'home'
  },
  {
    path: "videos",
    loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule)
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
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [
  MusicPageComponent,
  GalleryPageComponent,
  DocumentPageComponent,
  OtherPageComponent
]; 