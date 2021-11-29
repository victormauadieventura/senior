import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  ngOnInit(): void {
  }

  deleteConfirmation() {
    this.confirmationService.confirm({
      header: 'Deletar',
      message: 'Este item será deletado permanentemente, deseja continuar com a operação?',
      accept: () => {
        console.log('Deletou');
      }
    });
  }
}
