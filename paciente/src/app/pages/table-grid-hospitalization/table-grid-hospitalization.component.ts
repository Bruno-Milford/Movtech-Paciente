import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Hospitalization } from 'src/app/models/Hospitalization';
import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';

@Component({
  selector: 'app-table-grid-hospitalization',
  templateUrl: './table-grid-hospitalization.component.html',
  styleUrls: ['./table-grid-hospitalization.component.scss']
})

export class TableGridHospitalizationComponent implements OnInit {

  displayedColumns: string[] = [
    'codInternacao', 'codPaciente', 'paciente',
    'dataEntradaInternacao', 'dataSaidaInternacao',
    'cns', 'localizacao', 'centroCusto', 'medico', 'crm',
    'situacao', 'Opcoes'
  ]

  dataSource: Hospitalization[] = [];

  constructor(
    private hospitalizationService: HospitalizationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadHospitalizations()
  }

  loadHospitalizations() {
    this.hospitalizationService.getHospitalizations().subscribe(hospitalization => {
      this.dataSource = hospitalization;
    })
  }

  DeleteHospitalization(codInternacao: number) {
    this.hospitalizationService.deleteHospitalization(codInternacao).subscribe(() => {
      this.dataSource = this.dataSource.filter(cod => cod.codInternacao != codInternacao)
      this.onSuccess()
      this.loadHospitalizations()
    })
  }

  EditHospitalization(codInternacao: number) {
    this.router.navigate([`internacoes/editar-internacao/${ codInternacao }`]);
  }

  HospitalizationAllInformation(codInternacao: number) {
    this.router.navigate([`internacoes/info/${ codInternacao }`])
  }

  onSuccess() {
    this.snackBar.open('Internação excluido com sucesso!', '', { duration: 5000 })
  }
}
