import { Patient } from 'src/app/models/Patient';
import { Component, OnInit } from '@angular/core';

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

  constructor(public patientsService: PatientsService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadPatients()
  }

  loadPatients() {
    this.patientsService.getPatients().subscribe(patients => {
      this.dataSource = patients;
    })

    console.log(this.dataSource);
  }

  displayedColumns: string[] = [
    'ID', 'Nome', 'Sexo', 'Nascimento', 'Mae', 'CPF', 'RG', 'CNS', 'Cor', 
    'Nacionalidade', 'Naturalidade', 'Instrucao', 'Profissao', 'Responsavel', 
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Telefone', 'Celular', 
    'Contato', 'Telefone Contato', 'Email', 'Observacao', 'Opções'
  ];
  dataSource: Patient[] = [];
}
