import { Component, Input, OnInit } from '@angular/core';
import { VideoCollectionI } from 'src/app/shared/interfaces/video-collection-interface';

@Component({
  selector: 'app-video-collections-item',
  templateUrl: './video-collections-item.component.html',
  styleUrls: ['./video-collections-item.component.scss']
})
export class VideoCollectionsItemComponent implements OnInit {

  @Input() collection!: VideoCollectionI;

  constructor() { }

  ngOnInit(): void {
  }

}
