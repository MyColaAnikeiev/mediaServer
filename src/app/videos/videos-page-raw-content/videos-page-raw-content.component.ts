import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { VideoI } from 'src/app/shared/interfaces/videos-interface';
import { VideoPlayerComponent } from 'src/app/shared/widgets/video-player/video-player.component';

@Component({
  selector: 'app-videos-page-raw-content',
  templateUrl: './videos-page-raw-content.component.html',
  styleUrls: ['./videos-page-raw-content.component.scss']
})
export class VideosPageContentComponent implements OnInit {

  @Input('videos')          videos: VideoI[] = [];
  @ViewChild('videoPlayer') player!: VideoPlayerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  showPlayer(video: VideoI){
    this.player.play(video);
  }
}
