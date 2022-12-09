import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';
import { Hospitalization } from 'src/app/models/Hospitalization';

@Component({
  selector: 'app-form-hospitalization-data-update',
  templateUrl: './form-hospitalization-data-update.component.html',
  styleUrls: ['./form-hospitalization-data-update.component.scss']
})
export class FormHospitalizationDataUpdateComponent implements OnInit {

  dataHospitalization: Hospitalization = new Hospitalization(
    0, 0, "", new Date(), "", new Date(), new Date("HH:mm"), new Date(), new Date(),
    "", "", "", "", "", "", "", "", "", ""
  );

  constructor(
    public hospitalizationService: HospitalizationService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const codInternacao: any = this.activatedRoute.snapshot.paramMap.get("codInterncao");

    this.hospitalizationService.getHospitalizationById(codInternacao).subscribe((data) => {
      this.dataHospitalization = data;
    })
  }

  back() {
    this.router.navigate(["/interncoes"]);
  }

  onSuccess() {
    this.snackBar.open('Internação editada com sucesso!', '', { duration: 5000 })
  }
}
