import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeMediaItemComponent } from "./home-media-item/home-media-item.component";
import { HomeSearchFilterComponent } from "./home-search-filter/home-search-filter.component";
import { HomeRoutingModule, routerComponents } from "./home.routing.module";
import { SharedModule } from "../shared/shared.module";
import { TypeFormatTreeService } from "../shared/services/type-format-tree/type-format-tree.service";


@NgModule({
    declarations: [
        routerComponents,
        HomeMediaItemComponent,
        HomeSearchFilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    providers: [
        TypeFormatTreeService
    ]
})
export class HomeModule{
}