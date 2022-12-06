import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { PatientProps } from 'src/app/models/Patient';
import { PatientsService } from 'src/services/patients/patients.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-patient-data-update',
  templateUrl: './form-patient-data-update.component.html',
  styleUrls: ['./form-patient-data-update.component.scss']
})

export class FormPatientDataUpdateComponent implements OnInit {
  @Input() patientsData!: {
    codPaciente: number;
    nomePaciente: string;
    sexoPaciente: string;
    dataNascimento: Date;
    nomeMaePaciente: string;
    cpfPaciente: string;
    rgPaciente: string;
    cns: string;
    corPaciente: string;
    nacionalidade: string;
    naturalidade: string;
    grauInstrucaoPaciente: string;
    profissaoPaciente: string;
    responsavelPaciente: string;
    cep: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    telefone: string;
    celular: string;
    contato: string;
    telefoneContato: string;
    email: string;
    observacao: string;
  }

  constructor(
    public patientsService: PatientsService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
      }
    )
  }

  dataSource: PatientProps = new PatientProps(
    0, "", "", new Date(), "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  );

  editPatient() {
    this.patientsService.updatePatient(this.dataSource).subscribe(() => {
      this.onSuccess()
      this.router.navigate(["/pacientes"])
    })
  }

  back() {
    this.router.navigate(["/pacientes"])
  }

  onSuccess() {
    this.snackBar.open('Paciente editado com sucesso!', '', { duration: 5000 })
  }
}
