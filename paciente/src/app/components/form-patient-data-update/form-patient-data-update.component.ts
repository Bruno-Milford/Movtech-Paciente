import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  ) { }

  ngOnInit(): void {
    this.snapShotPatientData()
  }

  dataSource: PatientProps = new PatientProps(
    0, "", "", new Date(), "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  );

  snapShotPatientData() {
    const IDpatient = this.activatedRoute.snapshot.paramMap.get("codPaciente");

    // console.log(this.dataSource)

    this.patientsService.getPatientById(IDpatient).subscribe((data) => {
      this.dataSource = data;
    })
  }

  editPatient() {
    this.patientsService.updatePatient(this.dataSource).subscribe(() => {
      this.onSuccess()
      this.router.navigate(["/pacientes"])
    })
  }

  back() {
    this.router.navigate(["/pacientes"])
  }

  onSuccess() {
    this.snackBar.open('Paciente editado com sucesso!', '', { duration: 5000 })
  }
}
