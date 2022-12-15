import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientProps } from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-patient-data-all-information',
  templateUrl: './patient-data-all-information.component.html',
  styleUrls: ['./patient-data-all-information.component.scss']
})

export class PatientDataAllInformationComponent implements OnInit {

  dataPatient: PatientProps = new PatientProps(
    0, "", "", new Date(), "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  );

  constructor(
    public patientsService: PatientsService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    const codPaciente: any = this.activatedRoute.snapshot.paramMap.get("codPaciente");

    this.patientsService.getPatientById(codPaciente).subscribe((data) => {
      this.dataPatient = data;
    })
  }

  back() {
    this.router.navigate(["/pacientes"])
  }
}
