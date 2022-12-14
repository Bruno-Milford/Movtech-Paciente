import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientRecordComponent } from './pages/patient-record/patient-record.component';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { MovementComponent } from './pages/movement/movement.component';
import { PatientConsultationComponent } from './pages/patient-consultation/patient-consultation.component';
import { TableGridPatientComponent } from './pages/table-grid-patient/table-grid-patient.component';
import { TableGridHospitalizationComponent } from './pages/table-grid-hospitalization/table-grid-hospitalization.component';
import { PatientDataUpdateComponent } from './pages/patient-data-update/patient-data-update.component';
import { HospitalizationDataUpdateComponent } from './pages/hospitalization-data-update/hospitalization-data-update.component';
import { CostCenterComponent } from './pages/cost-center/cost-center.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientAllInformationComponent } from './pages/patient-all-information/patient-all-information.component';
import { HospitalizationAllInformationComponent } from './pages/hospitalization-all-information/hospitalization-all-information.component';
import { MovementDataUpdateComponent } from './pages/movement-data-update/movement-data-update.component';

const routes: Routes = [
  {
    path: '',
    component: PatientRecordComponent
  },
  {
    path: 'pacientes',
    component: TableGridPatientComponent
  },
  {
    path: 'pacientes/editar-paciente/:codPaciente',
    component: PatientDataUpdateComponent
  },
  {
    path: 'pacientes/info/:codPaciente',
    component: PatientAllInformationComponent
  },
  {
    path: 'internacao',
    component: HospitalizationComponent
  },
  {
    path: 'internacoes',
    component: TableGridHospitalizationComponent
  },
  {
    path: 'internacoes/editar-internacao/:codInternacao',
    component: HospitalizationDataUpdateComponent
  },
  {
    path: 'internacoes/info/:codInternacao',
    component: HospitalizationAllInformationComponent
  },
  {
    path: 'centro-custo',
    component: CostCenterComponent
  },
  {
    path: 'movimentacao',
    component: MovementComponent
  },
  {
    path: 'movimentacao/editar-movimentacao/:codMovimentacao',
    component: MovementDataUpdateComponent
  },
  {
    path: 'consulta',
    component: PatientConsultationComponent
  },
  {
    path: 'grafico',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
