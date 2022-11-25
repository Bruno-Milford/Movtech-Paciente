import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-model-patient-record',
  templateUrl: './model-patient-record.component.html',
  styleUrls: ['./model-patient-record.component.scss']
})
export class ModelPatientRecordComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'Mae', 'CPF', 'RG', 'CNS',
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Telefone', 
    'Celular', 'Email', 'Observacao', 'Opcoes'
  ];

  dataSource: Patient[] = [];

  constructor(public patientsService: PatientsService) { }

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
}
