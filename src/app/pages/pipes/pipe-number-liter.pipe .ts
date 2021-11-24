import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberLiter' })
export class PipeNumeberLiter implements PipeTransform {
  transform(value: string | number): string {
    return value.toLocaleString('pt-br', {minimumFractionDigits: 2}) + 'lt';
  }
}
