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
    // @inject(MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS) public hospitalization: Hospitalization,
    private snackBar: MatSnackBar,
  ) { }

  isValid!: boolean;

  patients: PatientProps[] = [];

  costCenters: CostCenter[] = [];

  dataSource: Hospitalization[] = [];

  ngOnInit(): void {
    // console.log(this.patients)

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

  validationCodPatient() {
    console.log(this.patients)

    if(this.isValid != true) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    this.patientsService.getPatientById(this.codPaciente).subscribe((data) => {
      this.patients = [data];

      if(data) {
        this.Paciente = data.nomePaciente;
        this.MaePaciente = data.nomeMaePaciente;
        this.cns = data.cns;

        console.log(this.cns)
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
