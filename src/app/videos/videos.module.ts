import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { VideoCollectionsItemComponent } from "./videos-collections-tab/video-collections-item/video-collections-item.component";
import { VideosCollectionComponent } from "./videos-collection/videos-collection.component";
import { VideosCollectionsTabComponent } from "./videos-collections-tab/videos-collections-tab.component";
import { VideosContentComponent } from "./shared/videos-content/videos-content.component";
import { VideosRawTabComponent } from "./videos-raw-tab/videos-raw-tab.component";
import { VideosComponent } from "./videos.component";
import { VideosRoutingModule } from "./videos.routing.module";


@NgModule({
    declarations: [
        VideoCollectionsItemComponent,
        VideosComponent,
        VideosContentComponent,
        VideosRawTabComponent,
        VideosCollectionsTabComponent,
        VideosCollectionComponent
    ],
    imports: [
        CommonModule,
        VideosRoutingModule,
        SharedModule
    ],
    exports: [
    ]
})
export class VideosModule{
}