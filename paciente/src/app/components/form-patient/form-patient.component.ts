import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PatientsService } from 'src/services/patients/patients.service';
import { PatientProps }  from 'src/app/models/Patient';

import { ModalPatientRecordComponent } from '../modal-patient-record/modal-patient-record.component';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})

export class FormComponent implements OnInit {

  constructor(
    private patientsService: PatientsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {}

  dataSource: PatientProps[] = [];

  savePatient() {
    const patients = new PatientProps(this.codPaciente,
      this.nomePaciente, this.sexoPaciente,
      new Date(this.dataNascimento),
      this.nomeMaePaciente, this.cpfPaciente, this.rgPaciente, this.cns,
      this.corPaciente, this.nacionalidade, this.naturalidade,
      this.grauInstrucaoPaciente, this.profissaoPaciente,
      this.responsavelPaciente, this.cep, this.endereco,
      this.bairro, this.cidade, this.uf, this.telefone,
      this.celular, this.contato, this.telefoneContato, this.email, this.observacao)

    this.patientsService.createPatient(patients)
    .subscribe(data => {
      // console.log(patients);
      this.dataSource.push(data);
      this.onSuccess();
    })
  }

  hospitalizationPatient() {
    this.router.navigate(['/internacao']);
  }

  onSuccess() {
    this.snackBar.open('Paciente cadastrado!', '', { duration: 5000 })
  }

  onError() {
    this.snackBar.open('Error ao cadastrar!', '', { duration: 5000 })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalPatientRecordComponent, {
      width: '100%'
    });
  }

  codPaciente = 0;
  nomePaciente = "";
  sexoPaciente = "";
  dataNascimento = Date();
  nomeMaePaciente = "";
  cpfPaciente = "";
  rgPaciente = "";
  cns = "";
  corPaciente = "";
  nacionalidade = "";
  naturalidade = "";
  grauInstrucaoPaciente = "";
  profissaoPaciente = "";
  responsavelPaciente = "";
  cep = "";
  endereco = "";
  bairro = "";
  cidade = "";
  uf = "";
  telefone = "";
  celular = "";
  contato = "";
  telefoneContato = "";
  email = "";
  observacao = "";
}
