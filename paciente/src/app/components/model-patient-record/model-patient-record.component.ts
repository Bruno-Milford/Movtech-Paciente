import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Opções: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Opções: ''},
];

@Component({
  selector: 'app-model-patient-record',
  templateUrl: './model-patient-record.component.html',
  styleUrls: ['./model-patient-record.component.scss']
})
export class ModelPatientRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Opções'];
  dataSource = ELEMENT_DATA;
}
