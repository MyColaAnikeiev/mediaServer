import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinct } from 'rxjs/operators';
import { GeneralFilterI } from 'src/app/shared/interfaces/ServerServiceGeneralFilterInterfaces';
import { EventEmitter } from '@angular/core';
import { TypeFormatTreeService } from 'src/app/shared/services/type-format-tree/type-format-tree.service';

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

  nameValue: string = '';
  currentType: string = 'all';  
  formats: string[] = [];
  currentFormat = 'all';

  constructor(public tree: TypeFormatTreeService) { }

  ngOnInit(): void {
    this.$changesStream = (new Observable<GeneralFilterI>((observer) => {
      this.sendNextChange = observer.next.bind(observer);
    })).pipe(debounceTime(200), distinct())

    this.emiter.emit(this.$changesStream);
  }

  ngOnChanges(ch: SimpleChanges){
    if('filter' in ch){
      const f = ch.filter.currentValue;
      if(!f)
        return;

      this.nameValue = f.name;
      this.currentType = f.type;
      this.formats = this.tree.getFormats(f.type)
      this.currentFormat = f.format;
    }
  }

  inputName(input: HTMLInputElement){
    this.nameValue = input.value;
    this.sendChanges();
  }
  inputType(select: HTMLSelectElement){
    this.currentType = select.value;
    this.currentFormat = 'all';
    this.formats = this.tree.getFormats(this.currentType)

    this.sendChanges();
  }
  inputFormat(select: HTMLSelectElement){
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
