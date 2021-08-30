import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideosPageCollectionsTabComponent } from "./videos-page-collections-tab/videos-page-collections-tab.component";
import { VideosPageRawTabComponent } from "./videos-page-raw-tab/videos-page-raw-tab.component";
import { VideosPageComponent } from "./videos-page/videos-page.component";


const routes: Routes = [
    {
        path: "",
        component: VideosPageComponent,
        children: [
          {
            path: "raw",
            component: VideosPageRawTabComponent
          },
          {
            path: "collections",
            component: VideosPageCollectionsTabComponent
          }
        ]
      },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class VideosRoutingModule{
}