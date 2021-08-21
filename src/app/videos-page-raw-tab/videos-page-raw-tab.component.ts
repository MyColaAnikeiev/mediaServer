import { Component, OnInit } from '@angular/core';
import { VideosI } from '../videos-interface';

@Component({
  selector: 'app-videos-page-raw-tab',
  templateUrl: './videos-page-raw-tab.component.html',
  styleUrls: ['./videos-page-raw-tab.component.scss']
})
export class VideosPageRawTabComponent implements OnInit {

  videos: VideosI[] = [
    {
      filename: "procofiev.mp4",
      title: "Prokofiev - Dance of a Knights",
      thumbImg: "assets/thumbs/procofiev.jpg",
      src: ""
    },
    {
      filename: "video.mp4",
      title: "My Video",
      thumbImg: "assets/thumbs/video.jpg",
      src: ""
    },
    {
      filename: "video.mp4",
      title: "",
      thumbImg: "assets/thumbs/video.jpg",
      src: ""
    },
    {
      filename: "video.mp4",
      title: "My Video",
      thumbImg: "assets/thumbs/video.jpg",
      src: ""
    },
    {
      filename: "video.mp4",
      title: "My Video",
      thumbImg: "assets/thumbs/video.jpg",
      src: ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
