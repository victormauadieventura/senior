import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({ name: 'date' })
export class PipeDate implements PipeTransform {
  transform(value: string): string {
    return moment(value).format('DD/MM/YYYY');
  }
}
