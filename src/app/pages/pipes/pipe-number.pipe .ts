import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'number' })
export class PipeNumeber implements PipeTransform {
  transform(value: string | number): string {
    return value.toLocaleString('pt-br', {minimumFractionDigits: 2});
  }
}
