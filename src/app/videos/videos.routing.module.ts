import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideosCollectionComponent } from "./videos-collection/videos-collection.component";
import { VideosCollectionsTabComponent } from "./videos-collections-tab/videos-collections-tab.component";
import { VideosRawTabComponent } from "./videos-raw-tab/videos-raw-tab.component";
import { VideosComponent } from "./videos.component";


const routes: Routes = [
    {
      path: "",
      component: VideosComponent,
      children: [
        {
          path: "raw",
          component: VideosRawTabComponent
        },
        {
          path: "collections",
          component: VideosCollectionsTabComponent
        },
      ]
    },
    {
      path: "collections/:id",
      component: VideosCollectionComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class VideosRoutingModule{
}