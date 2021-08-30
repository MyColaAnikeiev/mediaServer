import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxlen'
})
export class MaxlenPipe implements PipeTransform {

  transform(name: string | undefined, ...args: number[]): string {
    const maxLen = args.length ? args[0] : 16;
    
    if(name === undefined){
      return '';
    }

    if(name.length <= maxLen)
      return name;

    let short = name.slice(0,maxLen - 8);
    short += '...' + name.slice(-5);
    return short;
  }

}