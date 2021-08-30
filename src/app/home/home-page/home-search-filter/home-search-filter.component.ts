import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, delay, distinct } from 'rxjs/operators';
import { GeneralFilterI } from 'src/app/dataTypes/ServerServiceFilterInterfaces';
import { formatTypeTree } from 'src/app/formatTypeTree';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-search-filter',
  templateUrl: './home-search-filter.component.html',
  styleUrls: ['./home-search-filter.component.scss']
})
export class HomeSearchFilterComponent implements OnInit, OnChanges {
  
  @Output('changes') emiter = new EventEmitter();
  @Input('filter') filter!: GeneralFilterI;

  $changesStream!: Observable<GeneralFilterI>;
  sendNextChange!: Function;

  formatToType = formatTypeTree;

  nameValue: string = '';
  currentType: string = 'all';  
  formats: string[] = [];
  currentFormat = 'all';

  constructor() { }

  ngOnInit(): void {
    this.$changesStream = (new Observable<GeneralFilterI>((observer) => {
      this.sendNextChange = observer.next.bind(observer);
    })).pipe(debounceTime(200), distinct())

    this.emiter.emit(this.$changesStream);
  }

  ngOnChanges(ch: SimpleChanges){
    if('filter' in ch){
      let f = ch.filter.currentValue;
      if(!f)
        return;

      console.log('ngOnChanges ', f)

      this.nameValue = f.name;
      this.currentType = f.type;
      this.formats = (<any>this.formatToType)[f.type];
      this.currentFormat = f.format;
    }
  }

  inputName(input: HTMLInputElement){
    console.log('inputName')
    this.nameValue = input.value;
    this.sendChanges();
  }
  inputType(select: HTMLSelectElement){
    console.log('inputType')
    this.currentType = select.value;
    this.currentFormat = 'all';
    this.formats = (<any>this.formatToType)[this.currentType];

    this.sendChanges();
  }
  inputFormat(select: HTMLSelectElement){
    console.log('inputFormat')
    this.currentFormat = select.value;

    this.sendChanges();
  }

  sendChanges(){
    this.sendNextChange({
      name: this.nameValue,
      type: this.currentType == 'all' ? '' : this.currentType,
      format: this.currentFormat == 'all' ? '' : this.currentFormat
    })
  }

}
