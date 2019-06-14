import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var arrayLetras = value.split('');
    arrayLetras.reverse();
    var textoAlReves = arrayLetras.join('');
    return textoAlReves;
  }

}
