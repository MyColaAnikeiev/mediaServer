import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoCollectionsDataI } from 'src/app/shared/interfaces/ServiceDataInterfaces';
import { VideoPlayerComponent } from 'src/app/shared/components/video-player/video-player.component';
import { ServerService } from 'src/app/shared/services/server/server.service';

@Component({
  selector: 'app-videos-collections-tab',
  templateUrl: './videos-collections-tab.component.html',
  styleUrls: ['./videos-collections-tab.component.scss']
})
export class VideosCollectionsTabComponent implements OnInit {

  @ViewChild("videoPlayer") player!: VideoPlayerComponent;
  
  collections: VideoCollectionsDataI = {number: 0, pages: 0, data: []};
  subscripion!: Subscription;

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.subscripion = this.server.getVideoCollections()
      .subscribe(this.getServerSubscribers())
  }

  getServerSubscribers(){
    return {
      next: (res: VideoCollectionsDataI) => {
        this.collections = res;
      }
    }
  }

}
