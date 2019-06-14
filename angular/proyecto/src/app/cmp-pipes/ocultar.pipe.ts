import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: any, args1?: any, args2?: any): any {
    var arrayLetras = value.split(' ');
    
    for(let p in arrayLetras){
      if (args1.includes(arrayLetras[p])){
        let aux = args2.repeat(arrayLetras[p].length)
        arrayLetras[p] = aux;
      }
    }
    var textoAlReves = arrayLetras.join(' ');
    return textoAlReves;
  }

}
