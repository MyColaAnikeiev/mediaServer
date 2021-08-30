import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { VideoI } from '../../dataTypes/videos-interface';
import { VideoPlayerComponent } from '../../shared/widgets/video-player/video-player.component';

@Component({
  selector: 'app-videos-page-content',
  templateUrl: './videos-page-content.component.html',
  styleUrls: ['./videos-page-content.component.scss']
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
