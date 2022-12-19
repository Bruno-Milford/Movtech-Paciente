import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Movement } from 'src/app/models/Movement';
import { CostCenter } from 'src/app/models/CostCenter';

import { MovementService } from 'src/services/movement/movement.service';
import { CostCenterService } from 'src/services/costCenter/cost-center.service';

@Component({
  selector: 'app-form-movement-data-update',
  templateUrl: './form-movement-data-update.component.html',
  styleUrls: ['./form-movement-data-update.component.scss']
})

export class FormMovementDataUpdateComponent implements OnInit {

  dataMovement: Movement = new Movement(
    0, 0, 0, "", new Date(), "", "", "", "", "", ""
  );

  costCenters: CostCenter[] = [];

  constructor(
    public MovementService: MovementService,
    public costCenterService: CostCenterService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const codMovimentacao: any = this.activatedRoute.snapshot.paramMap.get("codMovimentacao");

    this.MovementService.getMovementById(codMovimentacao).subscribe((data) => {
      this.dataMovement = data;
    })

    this.costCenterService.getCostCenter().subscribe((data) => {
      this.costCenters = data;
    })
  }

  editMovement(movement: Movement) {
    this.MovementService.updateMovement(movement).subscribe(() => {
      this.onSuccess()
    })
  }

  back() {
    this.router.navigate(["/movimentacao"])
  }

  onSuccess() {
    this.snackBar.open('Movimentação editado com sucesso!', '', { duration: 5000 })

    this.router.navigate(["/movimentacao"])
  }
}
