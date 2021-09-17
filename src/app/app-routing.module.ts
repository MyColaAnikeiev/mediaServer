import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'home'
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "videos",
    loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule)
  },
  {
    path: "music",
    loadChildren: () => import('./music/music.module').then(m => m.MusicModule)
  },
  {
    path: "gallery",
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: "documents",
    loadChildren: () => import("./documets/document.module").then(m => m.DocumentModule)
  },
  {
    path: "other",
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
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
export class AppRoutingModule {

}