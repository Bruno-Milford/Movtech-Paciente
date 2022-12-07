import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movement } from 'src/app/models/Movement';
import { MovementService } from 'src/services/movement/movement.service';

@Component({
  selector: 'app-table-grid-movement',
  templateUrl: './table-grid-movement.component.html',
  styleUrls: ['./table-grid-movement.component.scss']
})
export class TableGridMovementComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'Prontuario', 'Sequencia', 'Data', 'Hora', 'Motivo', 'Localizacao',
    'Leito', 'Centro de Custo', 'Medico', 'CRM', 'Opcoes'
  ];

  dataSource: Movement[] = [];

  constructor(
    private movementService: MovementService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadMovement()
  }

  loadMovement() {
    this.movementService.getMovements().subscribe(movement => {
      this.dataSource = movement;
    })
  }

  deleteMovement(codMovimentacao: number) {
    this.movementService.deleteMovement(codMovimentacao).subscribe(() => {
      this.dataSource = this.dataSource.filter(cod => cod.codMovimentacao != codMovimentacao)
      this.onSuccess()
      this.loadMovement()
    })
  }

  onSuccess() {
    this.snackBar.open('Movimentação excluida com sucesso!', '', { duration: 5000 })
  }
}
