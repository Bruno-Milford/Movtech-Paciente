import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movement } from 'src/app/models/Movement';
import { MovementService } from 'src/services/movement/movement.service';

@Component({
  selector: 'app-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.scss']
})
export class FormMovementComponent implements OnInit {

  constructor(
    private movementService: MovementService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  dataSource: Movement[] = [];

  saveMovement() {
    const movements = new Movement(this.codMovimentacao,
    this.codPacienteMov, this.nomePacienteMov,
    new Date(this.dataNasciemtoMov), this.nomeMaePacienteMov,
    this.dataMovimentacao, this.horaMovimentacao,
    this.motivo, this.leitoMov, this.centroCustoMov,
    this. medicoMov, this.crmMov)

    this.movementService.createMovement(movements)
    .subscribe(data => {
      this.dataSource.push(data);
      this.onSuccess();
    })
  }

  onSuccess() {
    this.snackBar.open('Paciente movimentado!', '', { duration: 5000 })
  }

  codMovimentacao = 0;
  codPacienteMov = 0;
  nomePacienteMov = "";
  dataNasciemtoMov = Date();
  nomeMaePacienteMov = "";
  dataMovimentacao = "";
  horaMovimentacao = "";
  motivo = "";
  leitoMov = "";
  centroCustoMov = "";
  medicoMov = "";
  crmMov = "";
}
