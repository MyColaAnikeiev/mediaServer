import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgetsModule } from "../shared/widgets/widgets.module";
import { VideoCollectionsItemComponent } from "./video-collections-item/video-collections-item.component";
import { VideosPageCollectionsTabComponent } from "./videos-page-collections-tab/videos-page-collections-tab.component";
import { VideosPageContentComponent } from "./videos-page-raw-content/videos-page-raw-content.component";
import { VideosPageRawTabComponent } from "./videos-page-raw-tab/videos-page-raw-tab.component";
import { VideosPageComponent } from "./videos-page/videos-page.component";
import { VideosRoutingModule } from "./videos.routing.module";


@NgModule({
    declarations: [
        VideoCollectionsItemComponent,
        VideosPageComponent,
        VideosPageContentComponent,
        VideosPageRawTabComponent,
        VideosPageCollectionsTabComponent,
    ],
    imports: [
        CommonModule,
        WidgetsModule,
        VideosRoutingModule
    ],
    exports: [
    ]
})
export class VideosModule{
}