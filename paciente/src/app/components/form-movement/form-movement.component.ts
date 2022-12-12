import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CostCenter } from 'src/app/models/CostCenter';
import { Movement } from 'src/app/models/Movement';

import { CostCenterService } from 'src/services/costCenter/cost-center.service';
import { MovementService } from 'src/services/movement/movement.service';

@Component({
  selector: 'app-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.scss']
})
export class FormMovementComponent implements OnInit {

  constructor(
    private movementService: MovementService,
    private costCenterService: CostCenterService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.costCenterService.getCostCenter().subscribe((data) => {
      this.costCenters = data;
    })
  }

  costCenters: CostCenter[] = [];

  dataSource: Movement[] = [];

  saveMovement() {
    const movements = new Movement(this.codMovimentacao,
    this.codSequencia, this.codPacienteMov, this.nomePacienteMov,
    new Date(this.dataNasciemtoMov), this.nomeMaePacienteMov,
    new Date(this.dataMovimentacao), new Date(this.horaMovimentacao),
    this.motivo, this.localizacao, this.leitoMov, this.centroCustoMov,
    this. medicoMov, this.crmMov)

    this.movementService.createMovement(movements)
    .subscribe(data => {
      this.dataSource.push(data);
      this.onSuccess();
    })
  }

  onSuccess() {
    this.snackBar.open('Paciente movimentado!', '', { duration: 5000 })

    location.reload();
  }

  codMovimentacao = 0;
  codPacienteMov = 0;
  codSequencia = 0;
  nomePacienteMov = "";
  dataNasciemtoMov = Date();
  nomeMaePacienteMov = "";
  dataMovimentacao = Date();
  horaMovimentacao = Date();
  motivo = "";
  localizacao = "";
  leitoMov = "";
  centroCustoMov = "";
  medicoMov = "";
  crmMov = "";
}
