import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../itemInterface';

@Component({
  selector: 'app-home-media-item',
  templateUrl: './home-media-item.component.html',
  styleUrls: ['./home-media-item.component.scss']
})
export class HomeMediaItemComponent implements OnInit {

  @Input() item!: Item;
  hasDuration = false;

  constructor() { }

  ngOnInit(): void {
    if(typeof this.item.metadata?.duration == 'number')
      this.hasDuration = true;
  }

  getThumbImageUrl(): string{
    switch(this.item.filetype){
      case 'music':
        return 'assets/icons/music.png';
      case 'image':
      case 'video':
        return this.item.thumbImg
    }
    return '';
  }


}
