import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeneralDataI, VideoDataI } from './dataTypes/ServiceDataInterfaces';
import { dummyData } from './dumyServerData';
import { VideoI } from './videos-interface';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
  

  getAll(page=0, itemsInPage = 10): Observable<GeneralDataI>{
    let pages: number = Math.ceil(dummyData.length / itemsInPage);

    let data = dummyData.slice(page * itemsInPage, (page+1)*itemsInPage);

    return of({pages, data});
  }


  getVideos(page=0, itemsInPage = 6): Observable<VideoDataI>{
    let videos = dummyData
      .filter(item => item.filetype == 'video')
      .map((item) : VideoI => {
        return{
          filename: item.filename,
          title: item.metadata ? item.metadata.title : item.filename,
          thumbImg: item.thumbImg,
          src: item.href
        }
      });

    let pages: number = Math.floor(videos.length / itemsInPage) + 
      <any>(!!(videos.length % itemsInPage));
    videos = videos.splice(page * itemsInPage, itemsInPage);

    return of({pages, data:videos})
  }

}
