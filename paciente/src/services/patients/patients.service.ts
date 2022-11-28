import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import PatientProps from 'src/app/models/Patient';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class PatientsService {

  constructor(private http: HttpClient) { }

  patientApiURL = '/patients';

  getPatients() {
    return this.http.get<PatientProps[]>(Api.baseUrl + this.patientApiURL)
  }

  createPatient(patients: PatientProps): Observable<PatientProps> {
    return this.http.post<PatientProps>(Api.baseUrl + this.patientApiURL, {
      nomePaciente: patients.nomePaciente,
    })
  }

  updatePatient(patients: PatientProps): Observable<PatientProps> {
    return this.http.put<PatientProps>(Api.baseUrl + this.patientApiURL, patients)
  }

  deletePatient(codPaciente: string) {
    return this.http.put(Api.baseUrl + this.patientApiURL, codPaciente)
  }
}