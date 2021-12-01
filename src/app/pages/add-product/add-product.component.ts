import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/core/models/data';
import { ActivatedRoute, Router } from "@angular/router"
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  registrationForm: FormGroup;

  data: Data = {};

  measurement: any = [
    { name: 'Litro', code: 'litro' },
    { name: 'Quilograma', code: 'quilograma' },
    { name: 'Unidade', code: 'unidade' }
  ];

  productId: string = '';
  checked: boolean = false;
  measurementSelect: any = null;
  perishable: boolean = false;
  unitValidation: number = 3;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
  ) {
    this.registrationForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      measurement: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required],
      perishable: [''],
      expirationDate: ['', Validators.required],
      manufacturingDate: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      // this.editProduct(+this.productId);
    }

    this.getProduct();
    this.measurementValidation();
  }

  creatingID(): number {
    const product = localStorage.getItem('Data')
    if (product !== null) {
      const dataList = JSON.parse(product)
      return dataList.length + 1;
    } else {
      return 1
    }
  }

  onSubmit(): void {
    this.data = Object.assign(this.data, this.registrationForm.value);

    if (this.router.url === '/adicionar') {
      this.addProduct(this.data);
    }
    if (this.router.url === `/editar/${this.productId}`) {
      this.editProduct();
    }

    this.router.navigate(['/']);
  }

  addProduct(data: Data): void {
    data.id = this.creatingID();
    this.data.id = data.id;
    const product = localStorage.getItem('Data');
    if (product !== null) {
      const dataList = JSON.parse(product);
      dataList.push(this.data);
      localStorage.setItem('Data', JSON.stringify(dataList));
    } else {
      const dataList = []
      dataList.push(this.data);
      localStorage.setItem('Data', JSON.stringify(dataList));
    }
  }

  editProduct(): void {
    const product = localStorage.getItem('Data');
    if (product !== null) {
      const dataList = JSON.parse(product);
      dataList.splice(dataList.findIndex((data: Data) => data.id === +this.productId), 1);
      dataList.push(this.data);
      localStorage.setItem('Data', JSON.stringify(dataList));
    }
  }

  getProduct(): void {
    const data = localStorage.getItem('Data');
    if (data !== null) {
      const productList = JSON.parse(data);

      const currentProduct = productList.find((product: Data) => product.id === +this.productId);

      if (currentProduct !== undefined) {
        this.registrationForm.patchValue({
          id: currentProduct.id,
          name: currentProduct.name,
          measurement: currentProduct.measurement,
          amount: currentProduct.amount,
          price: currentProduct.price,
          perishable: currentProduct.perishable,
          expirationDate: currentProduct.expirationDate,
          manufacturingDate: currentProduct.manufacturingDate
        });
      }
    }
  }

  measurementValidation(): void {
    if (this.registrationForm.value.measurement && this.registrationForm.value.measurement.name === 'Unidade') {
      this.unitValidation = 0;
    }
  }

  cancelOperationConfirmation(): void {
    this.confirmationService.confirm({
      header: 'Cancelar operação',
      message: 'Deseja sair da tela de "Adicionar novo item"? Você irá perder todos os seus dados',
      accept: () => {
        this.cancelOperation()
      }
    });
  }

  cancelOperation(): void {
    this.data = {};
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
