import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CostCenter } from 'src/app/models/CostCenter';
import { Movement } from 'src/app/models/Movement';
import { PatientProps } from 'src/app/models/Patient';

import { PatientsService } from 'src/services/patients/patients.service';
import { CostCenterService } from 'src/services/costCenter/cost-center.service';
import { MovementService } from 'src/services/movement/movement.service';

@Component({
  selector: 'app-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.scss']
})
export class FormMovementComponent implements OnInit {

  constructor(
    private patientsService: PatientsService,
    private movementService: MovementService,
    private costCenterService: CostCenterService,
    private snackBar: MatSnackBar
  ) { }

  isValid!: boolean;

  patients: PatientProps[] = [];

  costCenters: CostCenter[] = [];

  dataSource: Movement[] = [];

  ngOnInit(): void {
    this.costCenterService.getCostCenter().subscribe((data) => {
      this.costCenters = data;
    })

    this.patientsService.getPatients().subscribe((data) => {
      this.patients = data;
    })
  }

  validationCodPatient() {
    if(this.isValid != true) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    this.patientsService.getPatientById(this.codPacienteMov).subscribe((data) => {

      if(data) {
        this.codPacienteMov = data.codPaciente;
        this.nomePacienteMov = data.nomePaciente;
        this.nomeMaePacienteMov = data.nomeMaePaciente;
      }
    })
  }

  saveMovement() {
    const movements = new Movement(this.codMovimentacao,
    this.codSequencia, this.codPacienteMov, this.nomePacienteMov,
    this.nomeMaePacienteMov, new Date(this.dataMovimentacao),
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
  nomeMaePacienteMov = "";
  dataMovimentacao = Date();
  motivo = "";
  localizacao = "";
  leitoMov = "";
  centroCustoMov = "";
  medicoMov = "";
  crmMov = "";
}
