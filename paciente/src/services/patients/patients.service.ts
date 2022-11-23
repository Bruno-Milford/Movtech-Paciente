import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import Patient from 'src/app/models/Patient';

@Injectable({
  providedIn: 'root'
})

export class PatientsService {

  patientApiURL = 'https://localhost:7254/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientApiURL);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientApiURL, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.patientApiURL, patient);
  }

  deletePatient(codPaciente: string) {
    return this.http.put(this.patientApiURL, codPaciente);
  }
}
