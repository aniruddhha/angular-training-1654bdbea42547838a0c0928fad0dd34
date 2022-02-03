import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string, pos : number): string {
    const arr = value.split(',')
    return arr[pos];
  }
}
