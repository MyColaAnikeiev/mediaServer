import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoDataI } from 'src/app/shared/interfaces/ServiceDataInterfaces';
import { ServerService } from 'src/app/shared/services/server.service';
import { VideoI } from 'src/app/shared/interfaces/videos-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos-page-raw-tab',
  templateUrl: './videos-page-raw-tab.component.html',
  styleUrls: ['./videos-page-raw-tab.component.scss']
})
export class VideosPageRawTabComponent implements OnInit {

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
    let next = (params: any) => {
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
