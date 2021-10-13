import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { GeneralFilterI } from 'src/app/shared/interfaces/ServerServiceGeneralFilterInterfaces';
import { GeneralI } from 'src/app/shared/interfaces/by-media-type/general-Interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeMediaContentSercive } from './shared/services/home-media-content.service';
import { HomeContentI } from './shared/interfaces/home-data.interface';
import { takeUntil } from 'rxjs/operators';
import { HomeSearchFilterService } from './shared/services/home-search-filter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ 
    HomeMediaContentSercive,
    HomeSearchFilterService
  ]
})
export class HomeComponent implements OnInit {
  private unsubscribe$ = new Subject();

  currentPage = 1;
  items: GeneralI[] = [];
  numOfPages: number = 0;

  searchOn = false;
  currentFilter: GeneralFilterI = {name:'',type:'',format:''};


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private mediaContent: HomeMediaContentSercive,
    private filterService: HomeSearchFilterService
  ) 
  { }

  ngOnInit(){
    this.mediaContent.getContent().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(this.getContentHandler());

    this.filterService.getStreamOfChanges().subscribe(filter => {
      this.currentFilter = filter;
      this.pageChange(1);
    })
  }

  getContentHandler(): Observer<HomeContentI>{
    console.log("getContentHandler")
    return {
        next: (content: HomeContentI) => {
          console.log("Cotent Handler next")
          this.currentPage = content.page;
          this.currentFilter = content.filter;
          this.numOfPages = content.responce.pages;
          this.items = content.responce.data;
          this.searchOn ||= !this.filterEmpty(this.currentFilter);
        },
        complete: () => {},
        error: () => {}
      }
  }
  
  pageChange(page: number){
    if(page < 1){ 
      page = 1;
    }

    this.currentPage = page;

    if(this.filterEmpty(this.currentFilter)){
      this.router.navigate([],{
        queryParams: {page},
        relativeTo: this.route
      })
    }else{
      this.router.navigate([], {
        queryParams: {
          search: 'on',
          page,
          ...this.currentFilter
        },
        relativeTo: this.route
      })
    }

  }

  searchBtnToggle(): void{
    this.searchOn = !this.searchOn;

    if(!this.searchOn){
      this.currentFilter = {name:'',type:'',format:''};
      this.pageChange(1);
    }
  }

  searchByFormat(item: GeneralI): void{
    this.currentFilter = {
      name: '',
      type: item.filetype,
      format: item.format
    }

    this.searchOn = true;
    this.currentPage = 1;
    this.pageChange(1);
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  filterEmpty(filter: GeneralFilterI): boolean{
    if(filter.name == '' && filter.type == '' && filter.format == ''){
      return true;
    }

    return false;
  }
}
