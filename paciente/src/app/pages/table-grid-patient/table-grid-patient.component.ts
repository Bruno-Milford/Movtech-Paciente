import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ModalPatientAllInformationComponent } from 'src/app/components/modal-patient-all-information/modal-patient-all-information.component';

import { PatientsService } from 'src/services/patients/patients.service';
import { PatientProps }  from 'src/app/models/Patient';

@Component({
  selector: 'app-table-grid-patient',
  templateUrl: './table-grid-patient.component.html',
  styleUrls: ['./table-grid-patient.component.scss'],
  providers: [
    PatientsService
  ]
})

export class TableGridPatientComponent implements OnInit {

  displayedColumns: string[] = [
    'ID', 'Nome', 'Nascimento', 'CPF', 'RG', 'CNS',
    'CEP', 'Endereco', 'Bairro', 'Cidade', 'UF', 'Telefone', 'Celular',
    'Email', 'Observacao', 'Opcoes'
  ];

  dataSource: PatientProps[] = [];

  constructor(
    private patientsService: PatientsService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadPatients()
  }

  loadPatients() {
    this.patientsService.getPatients().subscribe(patient => {
      // console.log(patient)
      this.dataSource = patient;
    })
  }

  DeletePatient(codPaciente: number) {
    this.patientsService.deletePatient(codPaciente).subscribe(() => {
      this.dataSource = this.dataSource.filter(cod => cod.codPaciente != codPaciente)
      this.loadPatients()
    });
  }

  openDialogPatientAllInformation(patient: PatientProps) {
    const dialogRef = this.dialog.open(ModalPatientAllInformationComponent, {
      width: '100%'
    });
  }

  EditPatient(patient: PatientProps) {
    this.router.navigate(['/']);
  }
}
