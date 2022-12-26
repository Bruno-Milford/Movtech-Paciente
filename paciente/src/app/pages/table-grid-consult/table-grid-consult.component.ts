import { Component, OnInit } from '@angular/core';

import { Consultation } from 'src/app/models/Consultation';
import { ConsultationService } from 'src/services/consultation/consultation.service';

@Component({
  selector: 'app-table-grid-consult',
  templateUrl: './table-grid-consult.component.html',
  styleUrls: ['./table-grid-consult.component.scss']
})
export class TableGridConsultComponent implements OnInit {

  displayedColumns: string[] = [
    // Paciente
    'Nome', 'CPF', 'RG', 'Email', 'Celular',

    // Internação
    'dataEntrada', 'localizacao', 'centroCusto', 'Meidco'
  ];

  // dataSource = Consultation[] = [];

  constructor(public consultationService: ConsultationService) { }

  ngOnInit(): void {

  }

  // loadConsultation() {
  //   this.consultationService.getConsultation().subscribe(consultation => {
  //     this.dataSource = consultation;
  //   })
  // }
}
