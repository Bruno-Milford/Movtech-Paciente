import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PatientProps } from 'src/app/models/Patient';
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

  getPatientById(codPaciente: any): Observable<PatientProps> {
    return this.http.get<PatientProps>(`${ Api.baseUrl + this.patientApiURL }?codPaciente=${ codPaciente }`);
  }

  createPatient(patients: PatientProps): Observable<PatientProps> {
    return this.http.post<PatientProps>(Api.baseUrl + this.patientApiURL, patients)
  }

  updatePatient(patients: PatientProps): Observable<PatientProps> {
    return this.http.put<PatientProps>(`${ Api.baseUrl + this.patientApiURL }?codPaciente=${ patients.codPaciente }`, patients)
  }

  deletePatient(codPaciente: number): Observable<PatientProps> {
    return this.http.delete<PatientProps>(`${ Api.baseUrl + this.patientApiURL }?codPaciente=${ codPaciente }`)
  }
}
