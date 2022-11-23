import { Component, OnInit } from '@angular/core';

import Patient from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-table-grid-patient',
  templateUrl: './table-grid-patient.component.html',
  styleUrls: ['./table-grid-patient.component.scss'],
  providers: [
    PatientsService
  ]
})
export class TableGridPatientComponent implements OnInit {

  dataSource: Patient[] = []

  // patients: Patient[] = [{
  //   codPaciente: 0,
  //   nomePaciente: '',
  //   sexoPaciente: '',
  //   dataNasciemto: ''
  // }];

  displayedColumns: string[] = ['ID', 'Nome', 'Sexo', 'Nascimento'];

  constructor(public patientsService: PatientsService) {
    this.patientsService.getPatients().subscribe(data => {
      console.log(data);
      this.dataSource = data
    });
  }

  ngOnInit(): void {

  }
}
