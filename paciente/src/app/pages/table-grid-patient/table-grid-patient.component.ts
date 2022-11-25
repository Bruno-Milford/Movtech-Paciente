import { Patient } from 'src/app/models/Patient';
import { Component, OnInit } from '@angular/core';

import { PatientsService } from 'src/services/patients/patients.service';
import { ModalTableGridPatientDeleteComponent } from 'src/app/components/modal-table-grid-patient-delete/modal-table-grid-patient-delete.component';
import { MatDialog } from '@angular/material/dialog';

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

  dataSource: Patient[] = [];

  constructor(
    public patientsService: PatientsService,
    public dialog: MatDialog
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
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O dialog foi fechado');
    })
  }

  public RemovePatient(patient: Patient) {
    this.dataSource.forEach((element, index) => {
      if(element.nomePaciente == patient.nomePaciente) {
        this.dataSource.splice(index, 1);
      }
    });

    let newDataSource: Patient[] = [];

    this.dataSource.forEach(p => newDataSource.push(p));
    this.dataSource = newDataSource;
  }

  UpdatePatient() {

  }
}
