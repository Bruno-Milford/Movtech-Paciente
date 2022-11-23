import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {}

  public recordPatient() {

  }

  public deletePatient() {

  }

  public hospitalizationPatient() {

  }
}
