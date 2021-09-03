import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators'
import { GeneralFilterI } from './dataTypes/ServerServiceFilterInterfaces';
import { GeneralDataI, VideoCollectionsDataI, VideoDataI } from './dataTypes/ServiceDataInterfaces';
import { dummyData, dummyVideoCollections } from './dumyServerData';
import { VideoI } from './dataTypes/videos-interface';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }


  getAll(page=0, itemsInPage = 10): Observable<GeneralDataI>{
    let pages: number = Math.ceil(dummyData.length / itemsInPage);

    let data = dummyData.slice(page * itemsInPage, (page+1)*itemsInPage);

    return of({number: dummyData.length ,pages, data}).pipe( delay(50) )
  }

  getAllFiltered(filter: GeneralFilterI, page=0, itemsInPage = 10): Observable<GeneralDataI>{

    let filtered = dummyData.filter(item => {
      let fits = true;
      
      if(filter.name){
        fits = item.filename.includes(filter.name);

        if(!fits && item.metadata){
          fits = item.metadata.title.includes(filter.name) ||
                item.metadata.author.includes(filter.name);
        }   
      }

      if(!fits) return false;

      if(filter.type){
        fits = item.filetype == filter.type;
      }

      if(!fits) return false;

      if(filter.format){
        fits = item.format == filter.format;
      }

      return fits;
    });

    let pages = Math.ceil(filtered.length / itemsInPage);
    let data = filtered.slice(page*itemsInPage, (page+1)*itemsInPage);
    return of({number: filtered.length,pages,data}).pipe(delay(50));
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

    return of({number:videos.length ,pages, data:videos}).pipe( delay(50) )
  }

  getVideoCollections(page=0, itemsInPage = 8): Observable<VideoCollectionsDataI>{
    let collections = dummyVideoCollections;

    let number = collections.length;
    let pages = Math.ceil(number / itemsInPage);
    let data = collections.slice(itemsInPage*page, itemsInPage*(page+1));

    return of({number, pages, data}).pipe( delay(50));
  }

}
