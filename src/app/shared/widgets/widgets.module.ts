import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageNavigationComponent } from "src/app/shared/widgets/page-navigation/page-navigation.component";
import { VideoPlayerComponent } from "src/app/shared/widgets/video-player/video-player.component";


@NgModule({
    declarations: [
        PageNavigationComponent,
        VideoPlayerComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        PageNavigationComponent,
        VideoPlayerComponent
    ]
})
export class WidgetsModule{
}