import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CostCenter } from 'src/app/models/CostCenter';
import { Movement } from 'src/app/models/Movement';

import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';
import { CostCenterService } from 'src/services/costCenter/cost-center.service';
import { MovementService } from 'src/services/movement/movement.service';
import { Hospitalization } from 'src/app/models/Hospitalization';

@Component({
  selector: 'app-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.scss']
})
export class FormMovementComponent implements OnInit {

  constructor(
    private hospitalizationService: HospitalizationService,
    private movementService: MovementService,
    private costCenterService: CostCenterService,
    private snackBar: MatSnackBar
  ) { }

  isValid!: boolean;

  hospitalizations: Hospitalization[] = [];

  costCenters: CostCenter[] = [];

  dataSource: Movement[] = [];

  ngOnInit(): void {
    this.costCenterService.getCostCenter().subscribe((data) => {
      this.costCenters = data;
    })

    this.hospitalizationService.getHospitalizations().subscribe((data) => {
      this.hospitalizations = data;
    })
  }

  validationCodPatient() {
    if(this.isValid != true) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    this.hospitalizationService.getHospitalizationById(this.codInternacao).subscribe((data) => {
      if(data) {
        this.codInternacao = data.codInternacao;
        this.nomePacienteMov = data.paciente;
      }

      console.log(this.codInternacao)
    })
  }

  saveMovement() {
    // console.log(this.codInternacao)

    const movements = new Movement(this.codMovimentacao,
    this.codInternacao, this.codSequencia, this.nomePacienteMov,
    new Date(this.dataMovimentacao), this.motivo, this.localizacao,
    this.leitoMov, this.centroCustoMov, this. medicoMov, this.crmMov)

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
  codInternacao = 0;
  codSequencia = 0;
  nomePacienteMov = "";
  dataMovimentacao = Date();
  motivo = "";
  localizacao = "";
  leitoMov = "";
  centroCustoMov = "";
  medicoMov = "";
  crmMov = "";
}
