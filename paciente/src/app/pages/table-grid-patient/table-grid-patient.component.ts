import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ModalTableGridPatientDeleteComponent } from 'src/app/components/modal-table-grid-patient-delete/modal-table-grid-patient-delete.component';
import { ModalPatientAllInformationComponent } from 'src/app/components/modal-patient-all-information/modal-patient-all-information.component';

import { PatientsService } from 'src/services/patients/patients.service';
import { PatientProps } from 'src/app/models/Patient';

@Component({
  selector: 'app-table-grid-patient',
  templateUrl: './table-grid-patient.component.html',
  styleUrls: ['./table-grid-patient.component.scss'],
  providers: [
    PatientsService
  ]
})

export class TableGridPatientComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'Mae', 'CPF', 'RG', 'CNS', 'Cor',
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Telefone', 'Celular',
    'Email', 'Observacao', 'Opcoes'
  ];

  dataSource: PatientProps[] = [];

  constructor(
    public patientsService: PatientsService,
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadPatients()
  }

  loadPatients() {
    this.patientsService.getPatients().subscribe(patient => {
      console.log(patient)
      this.dataSource = patient;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalTableGridPatientDeleteComponent, {
      width: '30%'
    });
  }

  openDialogPatientAllInformation() {
    const dialogRef = this.dialog.open(ModalPatientAllInformationComponent, {
      width: '100%'
    });
  }

  UpdatePatient() {
    this.router.navigate(['/']);
  }
}
