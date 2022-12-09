import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { Hospitalization } from 'src/app/models/Hospitalization';

import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';

@Component({
  selector: 'app-form-hospitalization',
  templateUrl: './form-hospitalization.component.html',
  styleUrls: ['./form-hospitalization.component.scss']
})
export class FormHospitalizationComponent implements OnInit {

  constructor(
    private hospitalizationServive: HospitalizationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void { }

  dataSource: Hospitalization[] = [];

  saveHospitalization() {
    const hospitalization = new Hospitalization(this.codInternacao,
      this.codPaciente, this.Paciente, this.Nascimento, this.MaePaciente,
      this.dataEntradaInternacao, this.horaEntradaInternacao,
      this.dataSaidaInternacao, this.horaSaidaInternacao,
      this.cns, this.ClinicaMedica, this.localizacao, this.leito,
      this.centroCusto, this.hipoteseDiagnostica,
      this.medico, this.crm, this.diagnostico, this.situacao)

    this.hospitalizationServive.createHospitalization(hospitalization)
    .subscribe(data => {
      this.dataSource.push(data);
      this.onSuccess();
    })
  }

  onSuccess() {
    this.snackBar.open('Internação cadastrada!', '', { duration: 5000 })
  }

  codInternacao = 0;
  codPaciente = 0;
  Paciente = "";
  Nascimento = new Date();
  MaePaciente = "";
  dataEntradaInternacao = new Date();
  horaEntradaInternacao = new Date();
  dataSaidaInternacao = new Date();
  horaSaidaInternacao = new Date();
  cns = "";
  ClinicaMedica = "";
  localizacao = "";
  leito = "";
  centroCusto = "";
  hipoteseDiagnostica = "";
  medico = "";
  crm = "";
  diagnostico = "";
  situacao = "";
}
