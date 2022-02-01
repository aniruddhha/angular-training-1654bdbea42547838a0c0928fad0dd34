import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitter'
})
export class SplitterPipe implements PipeTransform {

  transform(value: string, pos: number): string {
    const arr = value.split(' ') 
    if(pos > arr.length ) return arr[0]
    return arr[pos];
  }
}
