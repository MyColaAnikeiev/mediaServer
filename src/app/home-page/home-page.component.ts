import { Component, OnInit } from '@angular/core';
import { Item } from '../itemInterface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchOn = false;

  items: Item[] = [
    {
      filetype: "music",
      format: "mp3",
      filename: "Ringtone.mp3",
      namingDisplayType: "name",
      date: "04.09.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
      filetype: "image",
      format: "jpg",
      filename: "grapefruit-slice.jpg",
      namingDisplayType: "name",
      date: "18.10.2020",
      thumbImg: 'assets/thumbs/grapefruit-slice.jpg',
      href: 'assets/thumbs/grapefruit-slice.jpg',
      metadata: null
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "metadata",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: {
        author: "Joan Roling",
        title: "Harry Potter",
        duration: 201
      }
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "name",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "name",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "name",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: null
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
