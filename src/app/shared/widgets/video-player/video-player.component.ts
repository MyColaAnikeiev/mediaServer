import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { VideoI } from 'src/app/dataTypes/videos-interface';

@Component({
  selector: '.video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('player') player!: ElementRef;
  @ViewChild('mask') playerMask!: ElementRef;
  @Input('videos') videos: VideoI[] = [];

  visible: boolean = false;

  videoSrc  = "";
  videoType = "video/mp4";
  currentVideoInd = 0;

  @HostListener('click',['$event.target']) clickHandler(target : HTMLElement){
    
    if(target.classList.contains("back-mask")){
      this.player.nativeElement.pause();
      this.visible = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.player)
    console.log(this.playerMask)
  }

  play(video: VideoI){
    this.currentVideoInd = this.videos.indexOf(video);
    if(this.currentVideoInd == -1)
      return;

    this.videoSrc = video.src;
    this.visible = true;
    this.player.nativeElement.play();
  }

  next(){
    if(this.currentVideoInd + 1 < this.videos.length){
      this.currentVideoInd++;
      let video = this.videos[this.currentVideoInd];
      this.videoSrc = video.src;
    }
  }

  previous(){
    if(this.currentVideoInd > 0){
      this.currentVideoInd--;
      let video = this.videos[this.currentVideoInd];
      this.videoSrc = video.src;
    }
  }
}
