import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// compoents
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { FormMovementComponent } from './components/form-movement/form-movement.component';
import { FormPatientConsultationComponent } from './components/form-patient-consultation/form-patient-consultation.component';
import { FormHospitalizationComponent } from './components/form-hospitalization/form-hospitalization.component';
import { ModalPatientRecordComponent } from './components/modal-patient-record/modal-patient-record.component';
import { ModalPatientHospitalizationComponent } from './components/modal-patient-hospitalization/modal-patient-hospitalization.component';
import { ModalPatientMovementComponent } from './components/modal-patient-movement/modal-patient-movement.component';
import { ModalTableGridPatientDeleteComponent } from './components/modal-table-grid-patient-delete/modal-table-grid-patient-delete.component';

// pages
import { PatientRecordComponent } from './pages/patient-record/patient-record.component';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { TableGridPatientComponent } from './pages/table-grid-patient/table-grid-patient.component';
import { TableGridConsulltComponent } from './pages/table-grid-consult/table-grid-consult.component';
import { TableGridHospitalizationComponent } from './pages/table-grid-hospitalization/table-grid-hospitalization.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MovementComponent } from './pages/movement/movement.component';
import { PatientConsultationComponent } from './pages/patient-consultation/patient-consultation.component';

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

// service
import { PatientsService } from '../services/patients/patients.service';

// http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalPatientAllInformationComponent } from './components/modal-patient-all-information/modal-patient-all-information.component';

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
    ModalTableGridPatientDeleteComponent,
    TableGridConsulltComponent,
    ModalPatientAllInformationComponent
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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    PatientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
