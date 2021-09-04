import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GeneralFilterI } from '../../shared/interfaces/ServerServiceFilterInterfaces';
import { GeneralDataI } from '../../shared/interfaces/ServiceDataInterfaces';
import { Item } from '../../shared/interfaces/itemInterface';
import { ServerService } from 'src/app/shared/services/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchOn = false;
  items: Item[] = [];

  filterStreamSubscription!: Subscription;
  currentFilter: GeneralFilterI = {name:'',type:'',format:''};

  currentPage = 1;
  numOfPages: number = 0;

  dataHandler!: {next: Function};
  queryParamHandler!: {next: Function};

  serverSubscription!: Subscription;
  paramSubscription!: Subscription;


  constructor(
    private server: ServerService, 
    private router: Router, 
    private route: ActivatedRoute,
    private location: Location
  ) 
  { }

  ngOnInit(): void {
    this.paramSubscription = this.route.queryParams
      .subscribe(<any>this.getQueryParamHandler())
  }


  getQueryParamHandler(){
    if(this.queryParamHandler){
      return this.queryParamHandler;
    }


    let next = (params : any) =>  {

      if(params.hasOwnProperty("search")){
        this.currentFilter.name = params.name ? params.name : '';
        this.currentFilter.type = params.type ? params.type : '';
        this.currentFilter.format = params.format ? params.format : '';
        
        let page = 1;
        if(params.hasOwnProperty("page")){
          page = parseInt(params.page);
          if(isNaN(page) || page < 1){
            page = 1;
          } 
        }

        this.searchOn = true;
        this.serverSubscription = this.server.getAllFiltered(this.currentFilter, page)
          .subscribe(<any>this.getDataHendlers());

        return;
      }
      
      if(params.hasOwnProperty("page")){
        let page = parseInt(params.page);

        if(!isNaN(page) && page > 0){          
          this.currentPage = page;

          this.serverSubscription = this.server.getAll(page)
            .subscribe(<any>this.getDataHendlers());

          return;
        }

        // Clear incorrect query params
        this.location.go(this.route.snapshot.url.join('/'));
      } 

      // If there is no parameters or they are incorrect
      this.serverSubscription = this.server.getAll()
          .subscribe(<any>this.getDataHendlers());

    }

    return {next}
  }

  getDataHendlers(){
    if(!this.dataHandler){
      this.dataHandler = {
        next: (response: GeneralDataI) => {
          this.numOfPages = response.pages;
          this.items = response.data;
        }
      }
    }

    return this.dataHandler;
  }

  
  pageChange(page: number){
    if(page < 1){ 
      page = 1;
    }

    this.currentPage = page;

    if(this.filterEmpty(this.currentFilter)){
      this.router.navigate(this.route.snapshot.url,{
        queryParams: {page}
      })
    }else{
      this.router.navigate(this.route.snapshot.url, {
        queryParams: {
          search: 'on',
          page,
          ...this.currentFilter
        }
      })
    }

  }


  searchBtnToggle(){
    this.searchOn = !this.searchOn;

    if(!this.searchOn){
      this.currentFilter = {name:'',type:'',format:''};
      this.pageChange(1);
    }
  }

  setFilterStream(stream: Observable<GeneralFilterI>){
    this.filterStreamSubscription = stream.subscribe({
      next: (filter) => {
        this.currentFilter = filter;
        this.pageChange(1);
      }
    }); 
  }

  serearchByFormat(item: Item){
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
    this.serverSubscription.unsubscribe();
    this.filterStreamSubscription?.unsubscribe();
    this.paramSubscription.unsubscribe();
  }

  filterEmpty(filter: GeneralFilterI){
    if((filter.name == '') && (filter.type == '') && (filter.format == '')){
      return true;
    }

    return false;
  }
}
