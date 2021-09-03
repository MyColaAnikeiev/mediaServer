import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoCollectionsDataI } from 'src/app/shared/interfaces/ServiceDataInterfaces';
import { ServerService } from 'src/app/shared/services/server.service'
import { VideoPlayerComponent } from 'src/app/shared/widgets/video-player/video-player.component';

@Component({
  selector: 'app-videos-page-collections-tab',
  templateUrl: './videos-page-collections-tab.component.html',
  styleUrls: ['./videos-page-collections-tab.component.scss']
})
export class VideosPageCollectionsTabComponent implements OnInit {

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
