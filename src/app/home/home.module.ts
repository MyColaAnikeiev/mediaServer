import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DurationPipe } from "./duration.pipe";
import { MaxlenPipe } from "./maxlen.pipe";
import { WidgetsModule } from "../shared/widgets/widgets.module";
import { HomeMediaItemComponent } from "./home-media-item/home-media-item.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeSearchFilterComponent } from "./home-page/home-search-filter/home-search-filter.component";
import { HomeRoutingModule } from "./home.routing.module";


@NgModule({
    declarations: [
        HomeMediaItemComponent,
        HomePageComponent,
        HomeSearchFilterComponent,
        DurationPipe,
        MaxlenPipe
    ],
    imports: [
        CommonModule,
        WidgetsModule,
        FormsModule,
        HomeRoutingModule
    ],
    exports: [
    ]
})
export class HomeModule{
}