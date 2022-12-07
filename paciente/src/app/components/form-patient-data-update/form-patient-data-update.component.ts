import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { PatientProps } from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-patient-data-update',
  templateUrl: './form-patient-data-update.component.html',
  styleUrls: ['./form-patient-data-update.component.scss']
})

export class FormPatientDataUpdateComponent implements OnInit {

  constructor(
    public patientsService: PatientsService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public patientProps: PatientProps
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(codPaciente: number) {
    this.patientsService.getPatientById(codPaciente).subscribe(data => {
      this.dataSource = data;
    })
    // console.log(this.dataSource)
  }

  dataSource: PatientProps[] = [];

  editPatient() {
    // this.patientsService.updatePatient().subscribe(() => {
    //   this.onSuccess()
    //   // this.router.navigate(["/pacientes"])
    // })
  }

  back() {
    this.router.navigate(["/pacientes"])
  }

  onSuccess() {
    this.snackBar.open('Paciente editado com sucesso!', '', { duration: 5000 })
  }
}
