import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeneralI } from '../../shared/interfaces/by-media-type/general-Interface';

@Component({
  selector: 'app-home-media-item',
  templateUrl: './home-media-item.component.html',
  styleUrls: ['./home-media-item.component.scss']
})
export class HomeMediaItemComponent implements OnInit {

  @Output('clickedFormat') formatEmiter = new EventEmitter(); 
  @Input() item!: GeneralI;
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

  thumbImageIsIcon(): boolean{
    switch(this.item.filetype){
      case 'music':
        return true;
      case 'image':
      case 'video':
        return false;
    }
    return true;
  }

  searchByItemFormat(){
    this.formatEmiter.emit(this.item);
  }
}
