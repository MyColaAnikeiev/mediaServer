import { NgModule } from "@angular/core";
import { DocumentRoutingModule, routerComponents } from "./documents-routing.module";


@NgModule({
    declarations: [
        routerComponents
    ],
    imports: [
        DocumentRoutingModule
    ]
})
export class DocumentModule{

}