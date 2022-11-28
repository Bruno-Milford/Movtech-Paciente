import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PatientsService } from 'src/services/patients/patients.service';
import PatientProps  from 'src/app/models/Patient';

import { ModalPatientRecordComponent } from '../modal-patient-record/modal-patient-record.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor(
    private patientsService: PatientsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {}

  dataSource: PatientProps[] = [];

  public savePatient() {
    // this.patientsService.createPatient().subscribe();
  }

  private onSuccess() {
    this.snackBar.open('Paciente cadastrado!', '', { duration: 5000 })
  }

  private onError() {
    this.snackBar.open('Error ao cadastrar!', '', { duration: 5000 })
  }

  openDialog() {
    // console.log(this.formCod);
    const dialogRef = this.dialog.open(ModalPatientRecordComponent, {
      width: '100%'
    });
  }

  formCod: string = "";
  formNome: string = "";
  formSexo: string = "";
  formNascimento: string = "";
  formMae: string = "";
  formCPF: string = "";
  formRG: string = "";
  formCNS: string = "";
  formCor: string = "";
  formNacionalide: string = "";
  formNaturalidade: string = "";
  formInstrucao: string = "";
  formProfissao: string = "";
  formResponsavel: string = "";
  formCEP: string = "";
  formEndereco: string = "";
  formBairro: string = "";
  formCidade: string = "";
  formUF: string = "";
  formTelefone: string = "";
  formCelular: string = "";
  formContato: string = "";
  formTelefoneContato: string = "";
  formEmail: string = "";
  formObservacao: string = "";
}
