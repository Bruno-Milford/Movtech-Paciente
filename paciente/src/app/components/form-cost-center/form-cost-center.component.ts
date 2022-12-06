import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CostCenter } from 'src/app/models/CostCenter';
import { CostCenterService } from 'src/services/costCenter/cost-center.service';

@Component({
  selector: 'app-form-cost-center',
  templateUrl: './form-cost-center.component.html',
  styleUrls: ['./form-cost-center.component.scss']
})
export class FormCostCenterComponent implements OnInit {

  constructor(
    private costCenterService: CostCenterService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  dataSource: CostCenter[] = [];

  saveCostCenter() {
    const costCenter = new CostCenter(this.codCostCenter, this.nomeCostCenter)

    this.costCenterService.createCostCenter(costCenter)
    .subscribe(data => {
      this.dataSource.push(data);
      this.onSuccess();
    })
  }

  onSuccess() {
    this.snackBar.open('Centro de custo cadastrada!', '', { duration: 5000 })

    location.reload();
  }

  codCostCenter = 0;
  nomeCostCenter = "";
}
