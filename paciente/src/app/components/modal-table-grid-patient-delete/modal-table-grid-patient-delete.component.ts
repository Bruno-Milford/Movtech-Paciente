import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PatientProps } from 'src/app/models/Patient';

@Component({
  selector: 'app-modal-table-grid-patient-delete',
  templateUrl: './modal-table-grid-patient-delete.component.html',
  styleUrls: ['./modal-table-grid-patient-delete.component.scss']
})
export class ModalTableGridPatientDeleteComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalTableGridPatientDeleteComponent>
  ) { }

  ngOnInit(): void { }

  dataSource: PatientProps[] = [];

  public RemovePatient(patient: PatientProps) {
    this.dataSource.forEach((element, index) => {
      if(element.nomePaciente == patient.nomePaciente) {
        this.dataSource.splice(index, 1);
      }
    });

    let newDataSource: PatientProps[] = [];

    this.dataSource.forEach(p => newDataSource.push(p));
    this.dataSource = newDataSource;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
