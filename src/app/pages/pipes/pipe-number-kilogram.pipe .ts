import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberKilogram' })
export class PipeNumeberKilogram implements PipeTransform {
  transform(value: string | number): string {
    return value.toLocaleString('pt-br', {minimumFractionDigits: 2}) + 'kg';
  }
}
