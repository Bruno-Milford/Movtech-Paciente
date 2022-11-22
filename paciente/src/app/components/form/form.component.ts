import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/services/patients/patients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  patients: Array<any> = new Array();

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

  listPatients() {
    this.patientsService.listPatients().subscribe(patients => {
      this.patients = patients;
    }, err => {
      console.log('Erro ao lista os pacientes', err);
    })
  }

  public recordPatient() {

  }

  public deletePatient() {

  }

  public hospitalizationPatient() {

  }
}
