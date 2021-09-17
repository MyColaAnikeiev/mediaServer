import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoDataI } from 'src/app/shared/interfaces/ServiceDataInterfaces';
import { VideoI } from 'src/app/shared/interfaces/by-media-type/videos-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/shared/services/server/server.service';

@Component({
  selector: 'app-videos-raw-tab',
  templateUrl: './videos-raw-tab.component.html',
  styleUrls: ['./videos-raw-tab.component.scss']
})
export class VideosRawTabComponent implements OnInit {

  videos: VideoI[] = [];
  serverSubscription!: Subscription;
  queryParamSubscription!: Subscription;
  numOfPages: number = 0;
  itemsPerPage: number = 6;
  currentPage = 1;

  constructor(
    private server: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.queryParamSubscription = this.route.queryParams
      .subscribe(<any>this.getQueryParamsSubscriber());
  }

  getQueryParamsSubscriber(){
    const next = (params: any) => {
      let page = 1;

      if(params.hasOwnProperty("page")){
        page = parseInt(params.page);
        if(isNaN(page) || page <= 0){
          page = 1;
        }
      }

      if(this.serverSubscription){
        this.serverSubscription.unsubscribe();
      }
      this.serverSubscription = this.server.getVideos(page)
        .subscribe(<any>this.getdataSubscriber())
    }

    return {next}
  }

  pageChange(pageNum: number){
    if(pageNum > this.numOfPages){
      pageNum = this.numOfPages;
    }

    this.router.navigate([],{
      queryParams: {
        page : pageNum
      },
      relativeTo: this.route
    })
  }

  getdataSubscriber(){
    return {
        next: (response: VideoDataI) => {
          this.numOfPages = response.pages;
          this.videos = response.data;
        }
    }
  }
  
  
  ngOnDestroy(){
    this.queryParamSubscription.unsubscribe();

    if(this.serverSubscription){
      this.serverSubscription.unsubscribe();
    }
  }

}
