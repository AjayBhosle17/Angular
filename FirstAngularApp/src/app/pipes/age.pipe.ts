import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    let current = new Date();
    let val = new Date(value as string);

    return (Number)(current.getFullYear()- val.getFullYear());
  }

}
