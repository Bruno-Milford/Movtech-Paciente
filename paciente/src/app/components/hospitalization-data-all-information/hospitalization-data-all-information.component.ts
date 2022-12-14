import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hospitalization } from 'src/app/models/Hospitalization';
import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';

@Component({
  selector: 'app-hospitalization-data-all-information',
  templateUrl: './hospitalization-data-all-information.component.html',
  styleUrls: ['./hospitalization-data-all-information.component.scss']
})

export class HospitalizationDataAllInformationComponent implements OnInit {

  dataHospitalization: Hospitalization = new Hospitalization(
    0, 0, "", new Date(), "", new Date(), new Date("HH:mm"), new Date(), new Date("HH:mm"),
    "", "", "", "", "", "", "", "", "", ""
  );

  constructor(
    public hospitalizationService: HospitalizationService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const codInternacao: any = this.activatedRoute.snapshot.paramMap.get("codInternacao");

    this.hospitalizationService.getHospitalizationById(codInternacao).subscribe((data) => {
      this.dataHospitalization = data;
    })
  }

  back() {
    this.router.navigate(["/internacoes"]);
  }
}
