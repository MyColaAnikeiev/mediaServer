import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoCollectionI } from 'src/app/shared/interfaces/video-collection-interface';
import { VideoI } from 'src/app/shared/interfaces/by-media-type/videos-interface';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-videos-page-collection',
  templateUrl: './videos-page-collection.component.html',
  styleUrls: ['./videos-page-collection.component.scss']
})
export class VideosPageCollectionComponent implements OnInit {

  serverSubscription!: Subscription;

  videos: VideoI[] = [];
  collection!: VideoCollectionI;
  switch = true;

  constructor(
    private route: ActivatedRoute,
    private server: ServerService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      let id = parseInt(<any>params.get("id"));

      if(isFinite((id))){
        this.serverSubscription = this.server.getVideoCollection(id)
          .subscribe({next: (data) => {
            if(data?.videos){
              this.collection = data;
              this.videos = data.videos;
            }
          }})
      }
    })
  }

}
