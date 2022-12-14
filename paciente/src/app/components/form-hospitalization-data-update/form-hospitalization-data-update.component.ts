import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Hospitalization } from 'src/app/models/Hospitalization';
import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';

@Component({
  selector: 'app-form-hospitalization-data-update',
  templateUrl: './form-hospitalization-data-update.component.html',
  styleUrls: ['./form-hospitalization-data-update.component.scss']
})
export class FormHospitalizationDataUpdateComponent implements OnInit {

  dataHospitalization: Hospitalization = new Hospitalization(
    0, 0, "", new Date(), "", new Date(), new Date(),
    "", "", "", "", "", "", "", "", "", ""
  );

  constructor(
    public hospitalizationService: HospitalizationService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const codInternacao: any = this.activatedRoute.snapshot.paramMap.get("codInternacao");

    this.hospitalizationService.getHospitalizationById(codInternacao).subscribe((data) => {
      this.dataHospitalization = data;
    })
  }

  editPatient(hospitalization: Hospitalization) {
    this.hospitalizationService.updateHospitalization(hospitalization).subscribe(() => {
      this.onSuccess()
    })
  }

  back() {
    this.router.navigate(["/internacoes"]);
  }

  onSuccess() {
    this.snackBar.open('Internação editada com sucesso!', '', { duration: 5000 });
  }
}
