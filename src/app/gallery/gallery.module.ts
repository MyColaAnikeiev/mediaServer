import { NgModule } from "@angular/core";
import { GalleryRoutingModule, routerComponents } from "./gallery-routing.module";


@NgModule({
    declarations: [
        routerComponents
    ],
    imports: [
        GalleryRoutingModule
    ]
})
export class GalleryModule{
}