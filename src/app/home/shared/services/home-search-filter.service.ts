import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable, Subject } from "rxjs";
import { debounceTime, filter } from "rxjs/operators";
import { GeneralFilterI } from "src/app/shared/interfaces/ServerServiceGeneralFilterInterfaces";

const emptyFilter = {name: '', type: '', format: ''}

@Injectable()
export class HomeSearchFilterService{
    private last$ = new BehaviorSubject<GeneralFilterI>(emptyFilter);
    private changesSubject = new Subject<GeneralFilterI>();
    private filter: GeneralFilterI = emptyFilter;

    updateFilter(filter: GeneralFilterI): void{
        this.filter = filter;
        this.changesSubject.next(filter);
        this.last$.next(filter);
    }

    updateName(name: string): void{
        this.filter.name = name;
        this.updateFilter(this.filter);
    }

    updateType(type: string): void{
        if(type == 'all'){
            this.filter.type = '';
        }else{
            this.filter.type = type;
        }
        this.filter.format = '';
        this.updateFilter(this.filter);
    }

    updateFormat(format: string): void{
        if(format == 'all'){
            this.filter.format = ''
        }else{
            this.filter.format = format
        }
        this.updateFilter(this.filter);
    }
    
    getStream(): Observable<GeneralFilterI>{
        return this.last$.pipe(
            debounceTime(150)
        )
    }

    getStreamOfChanges(): Observable<GeneralFilterI>{
        return this.changesSubject.pipe( 
            debounceTime(150)
        )
    }

    setInitial(filter: GeneralFilterI){
        this.filter = filter
        this.last$.next(filter)
    }

    ngOnDestroy(){
        this.changesSubject.complete();
        this.last$.complete();
    }
}