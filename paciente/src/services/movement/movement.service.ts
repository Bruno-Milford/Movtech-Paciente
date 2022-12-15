import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movement } from 'src/app/models/Movement';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class MovementService {

  constructor(private http: HttpClient) { }

  movementApiURL = '/movement'

  getMovements() {
    return this.http.get<Movement[]>(Api.baseUrl + this.movementApiURL)
  }

  getMovementById(codMovimentacao: any): Observable<Movement> {
    // console.log(codMovimentacao)
    return this.http.get<Movement>(`${ Api.baseUrl + this.movementApiURL }/${ codMovimentacao }`)
  }

  createMovement(movements: Movement): Observable<Movement> {
    return this.http.post<Movement>(Api.baseUrl + this.movementApiURL, movements)
  }

  updateMovement(movements: Movement): Observable<Movement> {
    return this.http.put<Movement>(`${ Api.baseUrl + this.movementApiURL }/${ movements.codMovimentacao }`, movements)
  }

  deleteMovement(codMovimentacao: number): Observable<Movement> {
    return this.http.delete<Movement>(`${ Api.baseUrl + this.movementApiURL }?codMovimentacao=${ codMovimentacao }`)
  }
}
