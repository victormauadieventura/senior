import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/core/models/data';
import { Router } from "@angular/router"
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  registrationForm: FormGroup;

  data: any = {};

  measurement: any = [
    { name: 'Litro', code: 'litro' },
    { name: 'Quilograma', code: 'quilograma' },
    { name: 'Unidade', code: 'unidade' }
  ];

  checked: boolean = false;
  measurementSelect: any = null;
  perishable: boolean = false;
  unitValidation: number = 2;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.registrationForm = this.formBuilder.group({
      id: [this.creatingID(), Validators.required],
      name: [null, [Validators.required, Validators.maxLength(50)]],
      measurement: [null, Validators.required],
      amount: [null, Validators.required],
      price: [null, Validators.required],
      perishable: [null],
      expirationDate: [null, Validators.required],
      manufacturingDate: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.measurementValidation();
  }

  creatingID(): number {
    let id = Math.floor(Math.random() * (1000));
    return id
  }

  onSubmit(): void {
    this.data = Object.assign(this.data, this.registrationForm.value);
    this.addProduct(this.data);
    console.log(this.registrationForm.value.measurement.name);
  }

  addProduct(data: Data): void {
    localStorage.setItem('Data', JSON.stringify(data));
  }

  measurementValidation() {
    if (this.registrationForm.value.measurement && this.registrationForm.value.measurement.name === 'Unidade') {
      this.unitValidation = 0;
    }
  }

  cancelOperationConfirmation() {
    this.confirmationService.confirm({
      header: 'Cancelar operação',
      message: 'Deseja sair da tela de "Adicionar novo item"? Você irá perder todos os seus dados',
      accept: () => {
        this.cancelOperation()
      }
    });
  }

  cancelOperation() {
    this.data = {};
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
