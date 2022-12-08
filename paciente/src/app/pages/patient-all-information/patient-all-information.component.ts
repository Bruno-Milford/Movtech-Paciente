import { Component, OnInit } from '@angular/core';

import { PatientProps } from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-patient-all-information',
  templateUrl: './patient-all-information.component.html',
  styleUrls: ['./patient-all-information.component.scss']
})
export class PatientAllInformationComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'CPF', 'RG', 'CNS',
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Telefone', 'Celular',
    'Email', 'Observacao'
  ];

  dataSource: PatientProps[] = [];

  constructor(
    private patientsService: PatientsService,
  ) { }

  ngOnInit(): void {
    // this.loadPatientbyId()
  }

  // loadPatientbyId() {
  //   this.patientsService.getPatientById(22).subscribe(patient => {
  //     this.dataSource = patient;
  //   })
  // }
}
