import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoCollectionI } from 'src/app/shared/interfaces/video-collection-interface';
import { VideoI } from 'src/app/shared/interfaces/by-media-type/videos-interface';
import { ServerService } from 'src/app/shared/services/server/server.service';

@Component({
  selector: 'app-videos-collection',
  templateUrl: './videos-collection.component.html',
  styleUrls: ['./videos-collection.component.scss']
})
export class VideosCollectionComponent implements OnInit {

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
      const id = parseInt(<any>params.get("id"));

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
