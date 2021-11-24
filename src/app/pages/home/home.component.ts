import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Columns } from 'src/app/core/models/columns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: Columns[] = [
    {
      header: 'Nome do item',
      field: 'name',
      dataType: 'text',
      style: {
        width: '12%'
      },
    },
    {
      header: 'Unidade de medida',
      field: 'measurement',
      dataType: 'text',
      style: {
        width: '15%'
      },
    },
    {
      header: 'Quantidade',
      field: 'amount',
      dataType: 'measurement',
      style: {
        width: '10%'
      },
    },
    {
      header: 'Preço',
      field: 'price',
      dataType: 'currency',
      style: {
        width: '10%'
      },
    },
    {
      header: 'Produto perecível',
      field: 'perishable',
      dataType: 'boolean',
      style: {
        width: '14%'
      },
    },
    {
      header: 'Data de validade',
      field: 'expirationDate',
      dataType: 'date',
      style: {
        width: '14%'
      },
    },
    {
      header: 'Data de fabricação',
      field: 'manufacturingDate',
      dataType: 'date',
      style: {
        width: '14%'
      },
    },
    {
      header: ' ',
      field: 'buttom',
      dataType: 'buttom',
      style: {
        width: '11%'
      },
    }
  ];

  data: Data[] = [
    {
      id: 1,
      name: 'Celular',
      measurement: 'Unidade',
      amount: 1,
      price: 2000.89,
      perishable: false,
      expirationDate: '2021-12-10',
      manufacturingDate: '2021-11-10',
    },
    {
      id: 2,
      name: 'Carne',
      measurement: 'Quilograma',
      amount: 10.98787,
      price: 2000.89,
      perishable: true,
      expirationDate: '2021-12-10',
      manufacturingDate: '2021-11-10',
    },
    {
      id: 3,
      name: 'Leite',
      measurement: 'Litro',
      amount: 1.76543,
      price: 2000.89,
      perishable: true,
      expirationDate: '2021-12-10',
      manufacturingDate: '2021-11-10',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
