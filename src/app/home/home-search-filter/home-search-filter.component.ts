import { Component, OnInit   } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { TypeFormatTreeService } from 'src/app/shared/services/type-format-tree/type-format-tree.service';
import { HomeSearchFilterService } from '../shared/services/home-search-filter.service';

@Component({
  selector: 'app-home-search-filter',
  templateUrl: './home-search-filter.component.html',
  styleUrls: ['./home-search-filter.component.scss']
})
export class HomeSearchFilterComponent implements OnInit {

  name$ : Observable<string>;
  type$ : Observable<string>;
  format$ : Observable<string>;
  formatOptions$: Observable<string[]>;

  constructor(
    public filterService: HomeSearchFilterService,
    public formatTree: TypeFormatTreeService,
  ){
    const filter$ = this.getFilter();
    this.name$ = filter$.pipe(
      map(f => f.name)
    )
    this.type$ = filter$.pipe(
      map(f => f.type ? f.type : 'all' )
    )
    this.format$ = filter$.pipe(
      map(f => f.format ? f.format : 'all'), 
      delay(0)
    )
    this.formatOptions$ = this.type$.pipe(
      map(type => this.formatTree.getFormats(type)
    ))
  }


  ngOnInit(): void {
  }

  getFilter(){
    return this.filterService.getStream();
  }

  inputName(input: HTMLInputElement){
    this.filterService.updateName(input.value);
  }
  inputType(select: HTMLSelectElement){
    this.filterService.updateType(select.value);
  }
  inputFormat(select: HTMLSelectElement){
    this.filterService.updateFormat(select.value);
  }

}
