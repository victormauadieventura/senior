import { Component, OnInit } from '@angular/core';
import { Columns } from 'src/app/core/models/columns';
import { Data } from 'src/app/core/models/data';

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
      field: 'measurement.name',
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

  data: Data[] = [];
  dataListUpdated: any = [];

  constructor( ) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Data') as string)
  }

  deleteProduct(id: any): void {
    const product = localStorage.getItem('Data');
    if (product !== null) {
      const dataList = JSON.parse(product);
      dataList.splice(dataList.findIndex((data: Data) => data.id === +id), 1);
      localStorage.setItem('Data', JSON.stringify(dataList));
      this.data = dataList;
    }
  }

  // TODO
  marshalData() {
    let products = [JSON.parse(localStorage.getItem('Data') as string)];

    products.forEach(product => {
      product.id = product.id,
      product.name = product.name,
      product.measurement = product.measurement.name,
      product.amount = product.amount,
      product.price = product.price,
      product.perishable = product.perishable,
      product.expirationDate = new Date(product.expirationDate),
      product.manufacturingDate = new Date(product.manufacturingDate)
    });

    return products
  }
}
