import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Data } from 'src/app/core/models/data';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  ngOnInit(): void {
  }

  goToPrductEdition(product: Data): void {
    this.router.navigateByUrl(`/editar/${product.id}`);
  }

  deleteConfirmation(): void {
    this.confirmationService.confirm({
      header: 'Deletar',
      message: 'Este item será deletado permanentemente, deseja continuar com a operação?',
      accept: () => {
        console.log('Deletou');
      }
    });
  }
}
