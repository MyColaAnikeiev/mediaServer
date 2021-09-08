import { NgModule } from "@angular/core";
import { MusicContentListComponent } from "./music-content-list/music-content-list.component";
import { MusicComponent } from "./music.component";
import { MusicRoutingModule } from "./music.routing.module";


@NgModule({
    declarations: [
        MusicComponent,
        MusicContentListComponent
    ],
    imports: [
        MusicRoutingModule
    ]
})
export class MusicModule{
}