import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
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

  currentPage = 0;
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
    if(page == this.currentPage) 
      return;

    if(page > this.numOfPages) page = this.numOfPages;
    if(page < 0) page = 0;

    this.currentPage = page;

    this.subscription.unsubscribe();
    this.subscription =  this.server.getAll(page - 1)
      .subscribe(<any>this.getDataHendlers());

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
