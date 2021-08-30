import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { GeneralFilterI } from '../dataTypes/ServerServiceFilterInterfaces';
import { GeneralDataI } from '../dataTypes/ServiceDataInterfaces';
import { Item } from '../itemInterface';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchOn = false;
  items: Item[] = [];

  $filterStreamSubscription!: Subscription;
  currentFilter: GeneralFilterI = {name:'',type:'',format:''};

  currentPage = 1;
  numOfPages: number = 0;
  dataHandler!: {next: Function};
  subscription!: Subscription;

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.subscription = this.server.getAll()
      .subscribe(<any>this.getDataHendlers());
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
    if(page > this.numOfPages) page = this.numOfPages;
    if(page < 1) page = 1;

    this.currentPage = page;

    this.subscription.unsubscribe();
    if(this.filterEmpty(this.currentFilter)){
      this.subscription =  this.server.getAll(page - 1)
        .subscribe(<any>this.getDataHendlers());
    }else{
      this.subscription =  this.server.getAllFiltered(this.currentFilter ,page-1)
      .subscribe(<any>this.getDataHendlers());
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
    this.$filterStreamSubscription = stream.subscribe({
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
    this.subscription.unsubscribe();
    this.$filterStreamSubscription?.unsubscribe();
  }

  filterEmpty(filter: GeneralFilterI){
    if((filter.name == '') && (filter.type == '') && (filter.format == ''))
      return true;
    return false;
  }
}
