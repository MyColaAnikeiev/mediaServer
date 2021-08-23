import { Component, OnInit, Input, SimpleChange, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '.page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {

  @Input('pages') numOfPages = 0;
  @Input() padding = 10;
  @Input()  currentPage = 1;
  @Output() currentPageChange = new EventEmitter<number>();
  maxDisplayedPages = 12;
  pages: number[] = [];
  onResizeFunction!: Function;


  constructor(private element: ElementRef) {
  }

  ngOnChanges(ch: SimpleChange){
    if('currentPage' in ch){
      this.placePages();
    }
  }

  ngOnInit(): void {
    this.getResizeHandler()();
    window.addEventListener('resize',<any>this.getResizeHandler());
  }

  ngOnDestroy(){
    window.removeEventListener('resize', <any>this.getResizeHandler());
  }

  
  getResizeHandler(){
    if(!this.onResizeFunction){
      this.onResizeFunction = () : any => {
        const pageBtnInterval = 30 + 4;
        const padding = this.padding;
        let {width} = this.element.nativeElement.getBoundingClientRect();
        let fited = Math.floor((width - padding) / pageBtnInterval);

        if(fited != this.maxDisplayedPages){
          this.maxDisplayedPages = fited;
          this.placePages();
        }
      }
    }

    return this.onResizeFunction;
  }

  selectPage(pNum: number){
    if(pNum < 1 || pNum == this.currentPage)
      return;

    this.currentPage = pNum;
    this.placePages();
    this.currentPageChange.emit(pNum);
  }

  placePages(){
    // Should not be less than 7  
    let max = this.maxDisplayedPages;
    max = max < 7 ? 7 : max;
    
    if(this.numOfPages <= max){
      this.pages = Array(this.numOfPages)
        .fill(0)
        .map((v,i) => i + 1);

      return;
    }

  
    let ret = Array(max).fill(0);
    let radius_toleft = Math.ceil(((max)  - 4) / 2);
    let radius_toright = Math.ceil(((max+1) - 4) / 2);

    if(this.currentPage - radius_toleft <= 2){
      for(let i = 0; i < max-2; i++){
        ret[i] = i+1;
      }
      ret[max-2] = 0;
      ret[max-1] = this.numOfPages;      
    }else if(this.currentPage + radius_toright >= this.numOfPages-1){
      ret[0] = 1;
      ret[1] = 0;

      for(let i = 2; i < max; i++){
        ret[i] = this.numOfPages - max + i + 1;
      }
    }
    else{
      ret[0] = 1;
      ret[1] = 0;

      let ind = 2;
      let page = this.currentPage - radius_toleft + 1;
      for(let i = 0; i < max - 2; i++){
        ret[ind++] = page++;
      }

      ret[max-2] = 0;
      ret[max-1] = this.numOfPages;
    }
    
    this.pages = ret;
  }

}
