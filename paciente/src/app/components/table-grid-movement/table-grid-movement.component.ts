import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/Movement';
import { MovementService } from 'src/services/movement/movement.service';

@Component({
  selector: 'app-table-grid-movement',
  templateUrl: './table-grid-movement.component.html',
  styleUrls: ['./table-grid-movement.component.scss']
})
export class TableGridMovementComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Prontuario', 'Sequencia', 'Data', 'Hora', 'Motivo', 'Localizacao', 
    'Leito', 'Centro de Custo', 'Clinica Medica', 'Medico', 'CRM'
  ];

  dataSource: Movement[] = [];

  constructor(
    private movementService: MovementService
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
}
