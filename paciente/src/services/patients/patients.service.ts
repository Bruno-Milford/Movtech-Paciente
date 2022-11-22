import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PatientsService {

  constructor(private http: HttpClient) { }

  listPatients(): Observable<any> {
    return this.http.get("https://localhost:7254/patients");
  }
}
