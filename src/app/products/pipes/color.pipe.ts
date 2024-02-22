import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';


@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color ): string {
    switch(value) {
      case Color.blue:
        return 'blue';
      case Color.black:
        return 'black';
      case Color.red:
        return 'red';
      case Color.green:
        return 'green';

      default:
        return 'no color'

    }
  }

}
