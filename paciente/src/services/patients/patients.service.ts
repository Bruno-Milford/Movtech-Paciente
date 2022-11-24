import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Patient } from 'src/app/models/Patient';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class PatientsService {

  constructor(private http: HttpClient) { }

  patientApiURL = '/patients';

  httpOpitons = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*'
    })
  }

  public getPatients() {
    return this.http.get<Patient[]>(Api.baseUrl + this.patientApiURL).pipe(
      catchError(this.handleError)
    )
  }

  public savePatients(patients: Patient[]) {
    return this.http.post<Patient[]>(Api.baseUrl + this.patientApiURL, patients, this.httpOpitons)
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${ error.status }, ` + `menssagem: ${ error.message }`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  } 
}
