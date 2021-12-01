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

  data: Data[] = [];
  dataListUpdated: any = [];

  constructor( ) { }

  ngOnInit(): void {
    this.data = this.marshalData()
  }

  deleteProduct(id: any): void {
    const products = localStorage.getItem('Data');
    if (products !== null) {
      const dataList = JSON.parse(products);
      dataList.splice(dataList.findIndex((data: Data) => data.id === +id), 1);
      localStorage.setItem('Data', JSON.stringify(dataList));
      this.data = dataList;
    }
  }

  marshalData() {
    let products = localStorage.getItem('Data');
    if (products !== null) {
      const dataList = JSON.parse(products);
      console.log(dataList);
      dataList.forEach((data: any) => {
        data.id = data.id,
        data.name = data.name,
        data.measurement = data.measurement.name,
        data.amount = data.amount,
        data.price = data.price,
        data.perishable = data.perishable,
        data.expirationDate = new Date(data.expirationDate),
        data.manufacturingDate = new Date(data.manufacturingDate)
      });
      return dataList;
    }
  }
}
