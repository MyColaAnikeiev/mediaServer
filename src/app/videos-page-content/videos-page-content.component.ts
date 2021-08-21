import { Component, OnInit, Input } from '@angular/core';
import { VideosI } from '../videos-interface';

@Component({
  selector: 'app-videos-page-content',
  templateUrl: './videos-page-content.component.html',
  styleUrls: ['./videos-page-content.component.scss']
})
export class VideosPageContentComponent implements OnInit {

  @Input('videos') videos: VideosI[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
