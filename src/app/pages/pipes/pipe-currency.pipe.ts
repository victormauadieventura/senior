import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currency' })
export class PipeCurrency implements PipeTransform {
  transform(value: string | number): string {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
