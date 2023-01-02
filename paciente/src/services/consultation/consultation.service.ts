import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Consultation } from 'src/app/models/Consultation';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class ConsultationService {

  constructor(private http: HttpClient) { }

  consultationApiURL = '/consultation'

  getConsultation() {
    return this.http.get<Consultation[]>(Api.baseUrl + this.consultationApiURL)
  }
}
