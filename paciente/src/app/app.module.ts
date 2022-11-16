import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// compoents
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

// pages
import { PatientRecordComponent } from './pages/patient-record/patient-record.component';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { TableGridPatientComponent } from './pages/table-grid-patient/table-grid-patient.component';

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
    TableGridPatientComponent
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
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
