import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CostCenter } from 'src/app/models/CostCenter';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class CostCenterService {

  constructor(private http: HttpClient) { }

  costCenterApiURL = '/costcenter';

  getCostCenter() {
    return this.http.get<CostCenter[]>(Api.baseUrl + this.costCenterApiURL)
  }

  createCostCenter(costCenter: CostCenter): Observable<CostCenter> {
    return this.http.post<CostCenter>(Api.baseUrl + this.costCenterApiURL, costCenter)
  }

  updateCostCenter(costCenter: CostCenter): Observable<CostCenter> {
    return this.http.put<CostCenter>(`${ Api.baseUrl + this.costCenterApiURL }?codCentroCusto=${ costCenter.codCentroCusto }`, costCenter)
  }

  deleteCostCenter(codCostCenter: number): Observable<CostCenter> {
    return this.http.delete<CostCenter>(`${ Api.baseUrl + this.costCenterApiURL }?codCentroCusto=${ codCostCenter }`)
  }
}
