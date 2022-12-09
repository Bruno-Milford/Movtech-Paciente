import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  dataPatient: PatientProps = new PatientProps(
    0, "", "", new Date(), "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  );

  constructor(
    private patientsService: PatientsService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const codPaciente: any = this.activatedRoute.snapshot.paramMap.get("codPaciente");

    this.patientsService.getPatientById(codPaciente).subscribe((data) => {
      this.dataPatient = data;
    })
  }
}
