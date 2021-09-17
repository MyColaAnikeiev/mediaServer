import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageNavigationComponent } from "./components/page-navigation/page-navigation.component";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { DurationPipe } from "./pipes/duration.pipe";
import { MaxlenPipe } from "./pipes/maxlen.pipe";


@NgModule({
    declarations: [
        PageNavigationComponent,
        VideoPlayerComponent,
        DurationPipe,
        MaxlenPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DurationPipe,
        MaxlenPipe,
        PageNavigationComponent,
        VideoPlayerComponent
    ]
})
export class SharedModule{
}
