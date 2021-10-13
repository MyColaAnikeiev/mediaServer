import { Injectable } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { combineLatest, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { GeneralFilterI } from "src/app/shared/interfaces/ServerServiceGeneralFilterInterfaces";
import { GeneralDataI } from "src/app/shared/interfaces/ServiceDataInterfaces";
import { ServerService } from "src/app/shared/services/server/server.service";
import { HomeContentI } from "../interfaces/home-data.interface";
import { HomeSearchFilterService } from "./home-search-filter.service";

@Injectable()
export class HomeMediaContentSercive{
    constructor(
        private route: ActivatedRoute,
        private server: ServerService,
        private filterService: HomeSearchFilterService
    ){ }

    getContent(): Observable<HomeContentI>{
        return this.route.queryParams.pipe(

            switchMap((params: Params) => {
                let serverData$: Observable<GeneralDataI>
                const filter = getFilter(params)
                const page = getPage(params)

                this.filterService.setInitial(filter);
            
                if('search' in params){
                    serverData$ = this.server.getAllFiltered(filter, page)
                }else{
                    serverData$ = this.server.getAll(page)
                }

                return combineLatest([
                    of({page, filter}),
                    serverData$
                ])
            }),

            map(([param, responce]) => {
                return {
                    ...param,
                    responce
                }
            })
        )
    }

}


function getFilter(params: Params): GeneralFilterI{
    const name = <string>params.name || '';
    const type = <string>params.type || '';
    const format = <string>params.format || '';
    const filter: GeneralFilterI = {name, type, format};
    return filter;
}

function getPage(params: Params): number{
    let page = 1;
    if("page" in params){
        page = parseInt(params.page);
        if(isNaN(page) || page < 1){
            page = 1;
        } 
    }

    return page;
}