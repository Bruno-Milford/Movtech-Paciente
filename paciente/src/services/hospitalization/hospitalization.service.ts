import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { Hospitalization } from 'src/app/models/Hospitalization';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class HospitalizationService {

  constructor(private http: HttpClient) { }

  hospitalizationApiURL = '/hospitalization';

  httpOpitons = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*'
    })
  }

  public getHospitalizations() {
    this.http.get<Hospitalization[]>(Api.baseUrl + this.hospitalizationApiURL)
  }

  public saveHospitalization(hospitalizations: Hospitalization[]) {
    this.http.post<Hospitalization[]>(Api.baseUrl + this.hospitalizationApiURL, hospitalizations, this.httpOpitons)
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
