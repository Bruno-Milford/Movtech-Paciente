import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPatientConsultationComponent } from './form-patient-consultation.component';

describe('FormPatientConsultationComponent', () => {
  let component: FormPatientConsultationComponent;
  let fixture: ComponentFixture<FormPatientConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPatientConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPatientConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
