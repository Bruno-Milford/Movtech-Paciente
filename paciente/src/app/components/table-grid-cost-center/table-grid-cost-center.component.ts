import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CostCenter } from 'src/app/models/CostCenter';
import { CostCenterService } from 'src/services/costCenter/cost-center.service';

@Component({
  selector: 'app-table-grid-cost-center',
  templateUrl: './table-grid-cost-center.component.html',
  styleUrls: ['./table-grid-cost-center.component.scss']
})

export class TableGridCostCenterComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nome', 'Opcoes'];

  dataSource: CostCenter[] = [];

  constructor(
    private costCenterService: CostCenterService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadCostCenter()
  }

  loadCostCenter() {
    this.costCenterService.getCostCenter().subscribe(costcenter => {
      this.dataSource = costcenter;
    })
  }

  deleteCostCenter(codCentroCusto: number) {
    this.costCenterService.deleteCostCenter(codCentroCusto).subscribe(() => {
      this.dataSource = this.dataSource.filter(cod => cod.codCentroCusto != codCentroCusto)
      this.onSuccess()
      this.loadCostCenter()
    });
  }

  editCostCenter(codCentroCusto: number) {
    // const currentCostCenter = this.dataSource.find((c) => {
    //   return c.codCentroCusto === codCentroCusto
    // })


  }

  onSuccess() {
    this.snackBar.open('Centro de custo excluido com sucesso!', '', { duration: 5000 })
  }
}
