import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// compoents
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form-patient/form-patient.component';
import { FormMovementComponent } from './components/form-movement/form-movement.component';
import { FormPatientConsultationComponent } from './components/form-patient-consultation/form-patient-consultation.component';
import { FormHospitalizationComponent } from './components/form-hospitalization/form-hospitalization.component';
import { ModalPatientRecordComponent } from './components/modal-patient-record/modal-patient-record.component';
import { ModalPatientHospitalizationComponent } from './components/modal-patient-hospitalization/modal-patient-hospitalization.component';
import { ModalPatientMovementComponent } from './components/modal-patient-movement/modal-patient-movement.component';
import { ModalHospitalizationAllInformationComponent } from './components/modal-hospitalization-all-information/modal-hospitalization-all-information.component';
import { ModalDeleteHospitalizationComponent } from './components/modal-delete-hospitalization/modal-delete-hospitalization.component';
import { TableGridCostCenterComponent } from './components/table-grid-cost-center/table-grid-cost-center.component';
import { FormPatientDataUpdateComponent } from './components/form-patient-data-update/form-patient-data-update.component';
import { FormHospitalizationDataUpdateComponent } from './components/form-hospitalization-data-update/form-hospitalization-data-update.component';
import { TableGridMovementComponent } from './components/table-grid-movement/table-grid-movement.component';
import { FormCostCenterComponent } from './components/form-cost-center/form-cost-center.component';

// pages
import { PatientRecordComponent } from './pages/patient-record/patient-record.component';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { TableGridPatientComponent } from './pages/table-grid-patient/table-grid-patient.component';
import { TableGridConsulltComponent } from './pages/table-grid-consult/table-grid-consult.component';
import { TableGridHospitalizationComponent } from './pages/table-grid-hospitalization/table-grid-hospitalization.component';
import { MovementComponent } from './pages/movement/movement.component';
import { PatientConsultationComponent } from './pages/patient-consultation/patient-consultation.component';
import { PatientDataUpdateComponent } from './pages/patient-data-update/patient-data-update.component';
import { HospitalizationDataUpdateComponent } from './pages/hospitalization-data-update/hospitalization-data-update.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CostCenterComponent } from './pages/cost-center/cost-center.component';
import { PatientAllInformationComponent } from './pages/patient-all-information/patient-all-information.component';

// angular material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

// service
import { PatientsService } from 'src/services/patients/patients.service';
import { HospitalizationService } from 'src/services/hospitalization/hospitalization.service';

// http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientRecordComponent,
    HospitalizationComponent,
    MovementComponent,
    PatientConsultationComponent,
    FormComponent,
    TableGridPatientComponent,
    FormHospitalizationComponent,
    TableGridHospitalizationComponent,
    FormMovementComponent,
    FormPatientConsultationComponent,
    ModalPatientRecordComponent,
    ModalPatientHospitalizationComponent,
    ModalPatientMovementComponent,
    TableGridConsulltComponent,
    ModalHospitalizationAllInformationComponent,
    ModalDeleteHospitalizationComponent,
    TableGridCostCenterComponent,
    PatientDataUpdateComponent,
    FormPatientDataUpdateComponent,
    FormHospitalizationDataUpdateComponent,
    HospitalizationDataUpdateComponent,
    DashboardComponent,
    TableGridMovementComponent,
    CostCenterComponent,
    FormCostCenterComponent,
    PatientAllInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ScrollingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [
    HttpClientModule,
    PatientsService,
    HospitalizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
