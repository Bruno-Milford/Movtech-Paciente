import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PatientsService } from 'src/services/patients/patients.service';
import { Patient } from 'src/app/models/Patient';

import { ModelPatientRecordComponent } from '../model-patient-record/model-patient-record.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private patientsService: PatientsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  dataSource: Patient[] = [];

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

  public savePatient() {
    this.patientsService.savePatients(this.dataSource).subscribe(patient => 
      alert('Paciente salvo com sucesso')  
    );
  }

  public addPatient() {
    let patient: Patient = new Patient(this.formCod, this.formNome, this.formSexo, this.formNascimento, this.formMae, this.formCPF, this.formRG, this.formCNS, 
      this.formCor, this.formNacionalide, this.formNaturalidade, this.formInstrucao, this.formProfissao, this.formResponsavel, this.formCEP,
      this.formEndereco, this.formBairro, this.formCidade, this.formUF, this.formTelefone, this.formCelular, this.formContato, this.formTelefoneContato,
      this.formEmail, this.formObservacao) 

    let newDataSource: Patient[] = [];

    this.dataSource.forEach(p => newDataSource.push(p));
    this.dataSource = newDataSource;

    newDataSource.push(patient);
  }

  openDialog() {
    console.log(this.formCod);
    const dialogRef = this.dialog.open(ModelPatientRecordComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O dialog foi fechado');
    })
  }
}
