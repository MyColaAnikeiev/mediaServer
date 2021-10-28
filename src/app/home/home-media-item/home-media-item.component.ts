import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GeneralI } from '../../shared/interfaces/by-media-type/general-Interface';

@Component({
  selector: 'app-home-media-item',
  templateUrl: './home-media-item.component.html',
  styleUrls: ['./home-media-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMediaItemComponent implements OnInit {

  @Output('clickedOnFormat') formatEmiter = new EventEmitter(); 
  @Input() item!: GeneralI;

  hasDuration = false;
  imageSource!: string;
  isThumb!: boolean;
  constructor() { }

  ngOnInit(): void {
    if(typeof this.item.metadata?.duration == 'number'){
      this.hasDuration = true;
    }

    this.imageSource = this.getSourceImageUrl();
    this.isThumb = this.isThumbImage();
  }

  getSourceImageUrl(): string{
    console.log("getThumbImageUrl")

    switch(this.item.filetype){
      case 'music':
        return 'assets/icons/music.png';
      case 'image':
      case 'video':
        return this.item.thumbImg
    }
    return '';
  }

  isThumbImage(): boolean{
    console.log("thumbImageIsIcon");

    switch(this.item.filetype){
      case 'music':
        return false;
      case 'image':
      case 'video':
        return true;
    }
    return false;
  }

  searchByItemFormat(){
    this.formatEmiter.emit(this.item);
  }
}
