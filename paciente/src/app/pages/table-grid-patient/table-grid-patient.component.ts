import { Component, OnInit } from '@angular/core';

import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-table-grid-patient',
  templateUrl: './table-grid-patient.component.html',
  styleUrls: ['./table-grid-patient.component.scss']
})
export class TableGridPatientComponent implements OnInit {

  patients: Array<any> = new Array();

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

  listPatients() {
    this.patientsService.listPatients().subscribe(patients => {
      this.patients = patients;
    }, err => {
      console.log('Erro ao lista os pacientes', err);
    })
  }
}
