import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxlen'
})
export class MaxlenPipe implements PipeTransform {

  transform(name: string | undefined, maxLen = 16): string {

    if(name === undefined){
      return '';
    }

    if(name.length <= maxLen){
      return name;
    }

    let short = name.slice(0,maxLen - 8);
    short += '...' + name.slice(-5);
    return short;
    
  }

}
