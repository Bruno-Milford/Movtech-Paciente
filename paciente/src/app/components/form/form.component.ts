import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PatientsService } from 'src/services/patients/patients.service';
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

  recordPatient() {

  }

  deletePatient() {

  }

  hospitalizationPatient() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(ModelPatientRecordComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O dialog foi fechado');
    })
  }
}
