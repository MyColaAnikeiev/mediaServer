import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { VideoDataI } from 'src/app/shared/interfaces/ServiceDataInterfaces';
import { ServerService } from 'src/app/shared/services/server.service';
import { VideoI } from 'src/app/shared/interfaces/videos-interface';

@Component({
  selector: 'app-videos-page-raw-tab',
  templateUrl: './videos-page-raw-tab.component.html',
  styleUrls: ['./videos-page-raw-tab.component.scss']
})
export class VideosPageRawTabComponent implements OnInit {

  videos: VideoI[] = [];
  subscription!: Subscription;
  numOfPages: number = 0;
  itemsPerPage: number = 6;
  currentPage = 1;
  dataHandler!: {next: Function};

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.subscription = this.server.getVideos()
      .subscribe(<any>this.getDataHandler())
  }

  pageChange(pageNum: number){
    if(pageNum > this.numOfPages)
      pageNum = this.numOfPages;
    
    this.subscription.unsubscribe();
    this.subscription = this.server.getVideos(pageNum - 1)
      .subscribe(<any>this.getDataHandler());
  }

  getDataHandler(){
    if(!this.dataHandler){
      this.dataHandler = {
        next: (response: VideoDataI) => {
          this.numOfPages = response.pages;
          this.videos = response.data;
        }
      }
    }

    return this.dataHandler;
  }
  
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
