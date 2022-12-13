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

  constructor( ) { }

  ngOnInit(): void { }
}
