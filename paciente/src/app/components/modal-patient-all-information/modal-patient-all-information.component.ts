import { PatientsService } from 'src/services/patients/patients.service';
import { Component, OnInit } from '@angular/core';

import { PatientProps } from 'src/app/models/Patient';

@Component({
  selector: 'app-modal-patient-all-information',
  templateUrl: './modal-patient-all-information.component.html',
  styleUrls: ['./modal-patient-all-information.component.scss']
})
export class ModalPatientAllInformationComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'Sexo', 'Mae', 'CPF', 'RG', 'CNS', 'Cor',
    'Nacionalidade', 'Naturalidade', 'Instrucao', 'Profissao', 'Responsavel',
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Telefone', 'Celular',
    'Email', 'Observacao'
  ];

  dataSource: PatientProps[] = [];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void { }

  // ngAfterViewInit(codPaciente: number) {
  //   this.loadPatientWithSelectedId(codPaciente)
  // }

  // loadPatientWithSelectedId(codPaciente: number) {
  //   this.patientsService.getPatientById(codPaciente).subscribe(patient => {
  //     this.dataSource = patient;
  //   })
  // }
}
