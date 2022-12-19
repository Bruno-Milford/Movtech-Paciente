import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-form-patient-consultation',
  templateUrl: './form-patient-consultation.component.html',
  styleUrls: ['./form-patient-consultation.component.scss']
})
export class FormPatientConsultationComponent implements OnInit {

  constructor(
    public patientsService: PatientsService,
    public hospitalizationService: HospitalizationService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  dashboard() {
    this.router.navigate(["grafico"]);
  }

}
