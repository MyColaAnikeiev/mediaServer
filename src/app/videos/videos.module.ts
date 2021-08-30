import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgetsModule } from "../shared/widgets/widgets.module";
import { VideosPageContentComponent } from "./videos-page-content/videos-page-content.component";
import { VideosPageRawTabComponent } from "./videos-page-raw-tab/videos-page-raw-tab.component";
import { VideosPageComponent } from "./videos-page/videos-page.component";
import { VideosRoutingModule } from "./videos.routing.module";


@NgModule({
    declarations: [
        VideosPageComponent,
        VideosPageContentComponent,
        VideosPageRawTabComponent
    ],
    imports: [
        CommonModule,
        WidgetsModule,
        VideosRoutingModule
    ],
    exports: [
        VideosPageComponent,
        VideosPageContentComponent,
        VideosPageRawTabComponent
    ]
})
export class VideosModule{
}