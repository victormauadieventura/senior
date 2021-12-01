import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() deletedItem: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  goToPrductEdition(product: Data): void {
    this.router.navigateByUrl(`/editar/${product.id}`);
  }

  deleteConfirmation(id: number): void {
    this.confirmationService.confirm({
      header: 'Deletar',
      message: 'Este item será deletado permanentemente, deseja continuar com a operação?',
      accept: () => {
        this.deletedItem.emit(id);
      }
    });
  }
}
