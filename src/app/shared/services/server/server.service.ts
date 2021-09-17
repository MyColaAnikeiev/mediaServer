import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { GeneralFilterI } from '../../interfaces/ServerServiceGeneralFilterInterfaces';
import { GeneralDataI, MusicDataI, VideoCollectionsDataI, VideoDataI } from '../../interfaces/ServiceDataInterfaces';
import { dummyData, dummyMusicData, dummyVideoCollections } from '../../dammyData/dumyServerData';
import { VideoI } from '../../interfaces/by-media-type/videos-interface';
import { VideoCollectionI } from '../../interfaces/video-collection-interface';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }


  getAll(page=1, itemsInPage = 10): Observable<GeneralDataI>{
    page--;

    let pages: number = Math.ceil(dummyData.length / itemsInPage);

    let data = dummyData.slice(page * itemsInPage, (page+1)*itemsInPage);

    return of({number: dummyData.length ,pages, data}).pipe( delay(50) )
  }

  getAllFiltered(filter: GeneralFilterI, page=1, itemsInPage = 10): Observable<GeneralDataI>{
    page--;

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


  getVideos(page=1, itemsInPage = 6): Observable<VideoDataI>{
    page--;

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

  getVideoCollections(page=1, itemsInPage = 8): Observable<VideoCollectionsDataI>{
    page--;

    let collections = dummyVideoCollections;

    let number = collections.length;
    let pages = Math.ceil(number / itemsInPage);
    let data = collections.slice(itemsInPage*page, itemsInPage*(page+1));

    return of({number, pages, data}).pipe( delay(50));
  }

  getVideoCollection(id: number): Observable<VideoCollectionI | undefined>{
    let collections = dummyVideoCollections;
    let collection = collections.find((coll) => coll.id == id);

    return of(collection).pipe(delay(50));
  }

  getAllMusic(page = 1, itemsInPage = 18): Observable<MusicDataI>{
    page--;

    const number = dummyMusicData.length;
    const pages = Math.ceil(number / itemsInPage);
    const data = dummyMusicData.slice(page*itemsInPage, (page+1)*itemsInPage);

    return of({number, pages, data})
  }

  
}
