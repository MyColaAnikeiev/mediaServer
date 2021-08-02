import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainRoutes = [
    {
      link: "",
      imgSrc : "assets/header_icons/home.png" 
    },
    {
      link: "videos",
      imgSrc: "assets/header_icons/video.svg" 
    },
    {
      link: "music",
      imgSrc: "assets/header_icons/music.svg" 
    },
    {
      link: "gallery",
      imgSrc: "assets/header_icons/gallery.png" 
    },
    {
      link: "documents",
      imgSrc: "assets/header_icons/document.svg"
    },
    {
      link: "other",
      imgSrc: "assets/header_icons/other.svg" 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
