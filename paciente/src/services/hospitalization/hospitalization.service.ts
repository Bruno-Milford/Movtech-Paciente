import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hospitalization } from 'src/app/models/Hospitalization';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class HospitalizationService {

  constructor(private http: HttpClient) { }

  hospitalizationApiURL = '/hospitalization';

  getHospitalizations() {
    return this.http.get<Hospitalization[]>(Api.baseUrl + this.hospitalizationApiURL)
  }

  getHospitalizationById(codInternacao: any): Observable<Hospitalization> {
    console.log(codInternacao)
    return this.http.get<Hospitalization>(`${ Api.baseUrl + this.hospitalizationApiURL }/${ codInternacao }`);
  }

  createHospitalization(hospitalizations: Hospitalization): Observable<Hospitalization> {
    return this.http.post<Hospitalization>(Api.baseUrl + this.hospitalizationApiURL, hospitalizations)
  }

  updateHospitalization(hospitalizations: Hospitalization): Observable<Hospitalization> {
    return this.http.put<Hospitalization>(`${ Api.baseUrl + this.hospitalizationApiURL }/${ hospitalizations.codInternacao }`, hospitalizations);
  }

  deleteHospitalization(codInternacao: number): Observable<Hospitalization>  {
    return this.http.delete<Hospitalization>(`${ Api.baseUrl + this.hospitalizationApiURL }?codInternacao=${ codInternacao }`);
  }
}
