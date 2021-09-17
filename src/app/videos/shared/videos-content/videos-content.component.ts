import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { VideoI } from 'src/app/shared/interfaces/by-media-type/videos-interface';
import { VideoPlayerComponent } from 'src/app/shared/components/video-player/video-player.component';

@Component({
  selector: 'app-videos-content',
  templateUrl: './videos-content.component.html',
  styleUrls: ['./videos-content.component.scss']
})
export class VideosContentComponent implements OnInit {

  @Input('videos')          videos: VideoI[] = [];
  @ViewChild('videoPlayer') player!: VideoPlayerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  showPlayer(video: VideoI){
    this.player.play(video);
  }
}
