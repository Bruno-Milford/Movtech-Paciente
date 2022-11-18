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
  selector: 'app-table-grid-patient',
  templateUrl: './table-grid-patient.component.html',
  styleUrls: ['./table-grid-patient.component.scss']
})
export class TableGridPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Opções'];
  dataSource = ELEMENT_DATA;
}
