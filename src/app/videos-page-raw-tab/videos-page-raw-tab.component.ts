import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoDataI } from '../dataTypes/ServiceDataInterfaces';
import { ServerService } from '../server.service';
import { VideoI } from '../videos-interface';

@Component({
  selector: 'app-videos-page-raw-tab',
  templateUrl: './videos-page-raw-tab.component.html',
  styleUrls: ['./videos-page-raw-tab.component.scss']
})
export class VideosPageRawTabComponent implements OnInit {

  videos: VideoI[] = [];
  videosStream!: Observable<VideoDataI>;
  numOfPages: number = 0;
  itemsPerPage: number = 6;
  currentPage = 1;
  dataHandler!: {next: Function};

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.videosStream = this.server.getVideos();
    this.videosStream.subscribe(<any>this.getDataHandler())
  }

  pageChange(pageNum: number){
    if(pageNum > this.numOfPages)
      pageNum = this.numOfPages;
    
    this.server.getVideos(pageNum - 1).subscribe(<any>this.getDataHandler());
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

    return this.dataHandler
  }
  
  
  ngOnDestroy(){
    
  }

}
