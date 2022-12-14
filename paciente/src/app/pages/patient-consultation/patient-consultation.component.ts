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
  selector: 'app-patient-consultation',
  templateUrl: './patient-consultation.component.html',
  styleUrls: ['./patient-consultation.component.scss']
})
export class PatientConsultationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Opções'];
  dataSource = ELEMENT_DATA;
}
