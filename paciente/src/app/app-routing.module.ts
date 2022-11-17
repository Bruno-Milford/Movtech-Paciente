import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientRecordComponent } from './pages/patient-record/patient-record.component';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { MovementComponent } from './pages/movement/movement.component';
import { PatientConsultationComponent } from './pages/patient-consultation/patient-consultation.component';
import { TableGridPatientComponent } from './pages/table-grid-patient/table-grid-patient.component';
import { TableGridHospitalizationComponent } from './pages/table-grid-hospitalization/table-grid-hospitalization.component';

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
    path: 'internacao',
    component: HospitalizationComponent
  },
  {
    path: 'internacoes',
    component: TableGridHospitalizationComponent
  },
  {
    path: 'movimentacao',
    component: MovementComponent
  },
  {
    path: 'consulta',
    component: PatientConsultationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
