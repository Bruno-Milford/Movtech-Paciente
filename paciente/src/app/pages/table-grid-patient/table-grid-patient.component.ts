import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadPatients()
  }

  loadPatients() {
    this.patientsService.getPatients().subscribe(patient => {
      this.dataSource = patient;
    })
  }

  DeletePatient(codPaciente: number) {
    this.patientsService.deletePatient(codPaciente).subscribe(() => {
      this.dataSource = this.dataSource.filter(cod => cod.codPaciente != codPaciente)
      this.onSuccess()
      this.loadPatients()
    });
  }

  onSuccess() {
    this.snackBar.open('Paciente excluido com sucesso!', '', { duration: 5000 })
  }

  openDialogPatientAllInformation(codPaciente: number) {
    const dialogRef = this.dialog.open(ModalPatientAllInformationComponent, {
      width: '100%'
    });
  }

  EditPatient(codPaciente: number) {
    // this.router.navigate([`pacientes/editar-paciente/${ codPaciente }`]);
  }
}
