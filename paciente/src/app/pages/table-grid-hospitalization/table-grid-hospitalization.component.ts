import { Component, OnInit } from '@angular/core';

import { Hospitalization } from 'src/app/models/Hospitalization';
import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';

@Component({
  selector: 'app-table-grid-hospitalization',
  templateUrl: './table-grid-hospitalization.component.html',
  styleUrls: ['./table-grid-hospitalization.component.scss']
})
export class TableGridHospitalizationComponent implements OnInit {

  displayedColumns: string[] = [
    'codInternacao', 'codPaciente', 'paciente', 'nascimento', 'maePaciente',
    'dataEntradaInternacao', 'horaEntradaInternacao', 'dataSaidaInternacao',
    'horaSaidaInternacao', 'cns', 'ClinicaMedica', 'localizacao', 'leito',
    'centroCusto', 'hipoteseDiaginostica', 'medico', 'crm', 'diaginostico',
    'situacao'
  ]

  dataSource: Hospitalization[] = [];

  constructor(
    public hospitalizationService: HospitalizationService
  ) { }

  ngOnInit(): void { }

  // ngAfterViewInit() {
  //   this.loadHospitalizations()
  // }

  // loadHospitalizations() {
  //   this.hospitalizationService.getHospitalizations().subscribe(hospitalization => {
  //     console.log(hospitalization)
  //     this.dataSource = hospitalization;
  //   })
  // }

  openDialogHospitalizationAllInformation() {

  }

  UpdateHospitalization() {

  }

  openDialog() {

  }
}
