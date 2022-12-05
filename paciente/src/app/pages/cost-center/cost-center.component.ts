import { Component, OnInit } from '@angular/core';
import { CostCenter } from 'src/app/models/CostCenter';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.scss']
})
export class CostCenterComponent implements OnInit {

  constructor(private costCenter: CostCenter) { }

  ngOnInit(): void { }

  dataSource: CostCenter[] = [];

  openDialog() {

  }

  codCentroCusto = 0;
  nomeCentroCusto = "";
}
