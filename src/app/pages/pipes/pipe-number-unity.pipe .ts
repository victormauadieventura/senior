import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberUnity' })
export class PipeNumeberUnity implements PipeTransform {
  transform(value: string | number): string {
    return value.toString() + 'un';
  }
}
