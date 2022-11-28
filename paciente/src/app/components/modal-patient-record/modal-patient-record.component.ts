import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-modal-patient-record',
  templateUrl: './modal-patient-record.component.html',
  styleUrls: ['./modal-patient-record.component.scss']
})
export class ModalPatientRecordComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'Mae', 'CPF', 'RG', 'CNS',
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Celular', 'Email', 'Opcoes'
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
