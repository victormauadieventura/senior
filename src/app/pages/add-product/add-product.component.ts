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
  unitValidation: number = 2;

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
      this.getProduct();
    }
    this.measurementValidation();
  }

  creatingID(): number {
    let id = Math.floor(Math.random() * (1000));
    return id
  }

  onSubmit(): void {
    this.data = Object.assign(this.data, this.registrationForm.value);
    this.addProduct(this.data);
    this.router.navigate(['/']);
  }

  addProduct(data: Data): void {
    localStorage.setItem('Data', JSON.stringify(data));
  }

  getProduct(): void {
    let product: Data = JSON.parse(localStorage.getItem('Data') as string)

    this.perishable = product.perishable as boolean;

    this.registrationForm.patchValue({
      name: product.name,
      measurement: product.measurement,
      amount: product.amount,
      price: product.price,
      perishable: product.perishable,
      expirationDate: product.expirationDate,
      manufacturingDate: product.manufacturingDate
    });
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
