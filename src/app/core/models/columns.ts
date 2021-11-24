export interface Columns {
  header: string;
  field: string;
  dataType: 'text' | 'number' | 'measurement' | 'currency' | 'boolean' | 'date' | 'buttom';
  style?: {};
}
