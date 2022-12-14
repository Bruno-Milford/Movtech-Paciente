import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { PatientProps } from 'src/app/models/Patient';
import { CostCenter } from 'src/app/models/CostCenter';
import { Hospitalization } from 'src/app/models/Hospitalization';

import { CostCenterService } from 'src/services/costCenter/cost-center.service';
import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-form-hospitalization',
  templateUrl: './form-hospitalization.component.html',
  styleUrls: ['./form-hospitalization.component.scss']
})
export class FormHospitalizationComponent implements OnInit {

  constructor(
    private hospitalizationServive: HospitalizationService,
    private costCenterService: CostCenterService,
    private patientsService: PatientsService,
    private snackBar: MatSnackBar,
  ) { }

  isValid!: boolean;

  patients: PatientProps[] = [];

  costCenters: CostCenter[] = [];

  dataSource: Hospitalization[] = [];

  ngOnInit(): void {
    this.costCenterService.getCostCenter().subscribe((data) => {
      this.costCenters = data;
    })

    this.patientsService.getPatients().subscribe((data) => {
      this.patients = data;
    })
  }

  saveHospitalization() {
    const hospitalization = new Hospitalization(this.codInternacao,
      this.codPaciente, this.Paciente, this.Nascimento, this.MaePaciente,
      this.dataEntradaInternacao, this.dataSaidaInternacao,
      this.cns, this.ClinicaMedica, this.localizacao, this.leito,
      this.centroCusto, this.hipoteseDiagnostica,
      this.medico, this.crm, this.diagnostico, this.situacao)

    this.hospitalizationServive.createHospitalization(hospitalization)
    .subscribe(data => {
      this.dataSource.push(data);
      this.onSuccess();
    })
  }

  validationCodPatient() {
    if(this.isValid != true) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    this.patientsService.getPatientById(this.codPaciente).subscribe((data) => {

      if(data) {
        this.Paciente = data.nomePaciente;
        this.MaePaciente = data.nomeMaePaciente;
        this.Nascimento = new Date(data.dataNascimento);
        this.cns = data.cns;
      }
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
  dataSaidaInternacao = new Date();
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
