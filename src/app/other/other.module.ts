import { NgModule } from "@angular/core";
import { OtherRoutingModule, routerComponents } from "./other-routing.module";


@NgModule({
    declarations: [
        routerComponents
    ],
    imports: [
        OtherRoutingModule
    ]
})
export class OtherModule{
    
}