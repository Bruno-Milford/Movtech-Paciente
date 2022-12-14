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

  dataPatient: PatientProps = new PatientProps(
    0, "", "", new Date(), "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  );

  constructor(
    public patientsService: PatientsService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    const codPaciente: any = this.activatedRoute.snapshot.paramMap.get("codPaciente");

    this.patientsService.getPatientById(codPaciente).subscribe((data) => {
      this.dataPatient = data;
    })
  }

  editPatient(patients: PatientProps) {
    this.patientsService.updatePatient(patients).subscribe(() => {
      this.onSuccess()
    })
  }

  back() {
    this.router.navigate(["/pacientes"])
  }

  onSuccess() {
    this.snackBar.open('Paciente editado com sucesso!', '', { duration: 5000 })

    this.router.navigate(["/pacientes"])
  }
}
