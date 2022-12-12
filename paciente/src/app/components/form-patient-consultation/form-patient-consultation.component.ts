import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-patient-consultation',
  templateUrl: './form-patient-consultation.component.html',
  styleUrls: ['./form-patient-consultation.component.scss']
})
export class FormPatientConsultationComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void { }

  dashboard() {
    this.router.navigate(["grafico"]);
  }

}
