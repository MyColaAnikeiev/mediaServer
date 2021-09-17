import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if(value == null || value == undefined){
      return '';
    }

    let dur = Math.round(value);
    let sec = dur % 60;
    let min = Math.floor(dur / 60) % 60;
    let hr = Math.floor(dur / 3600);

    let str = '';

    if(hr){
      str = fillZero(hr) + ':';
    }

    str += fillZero(min) + ':';
    str += fillZero(sec);

    return str;
  }

}

function fillZero(num: number){
  return num > 9 ? num.toString() : '0' + num.toString();
}