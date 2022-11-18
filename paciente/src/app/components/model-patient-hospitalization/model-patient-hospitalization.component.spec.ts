import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPatientHospitalizationComponent } from './model-patient-hospitalization.component';

describe('ModelPatientHospitalizationComponent', () => {
  let component: ModelPatientHospitalizationComponent;
  let fixture: ComponentFixture<ModelPatientHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPatientHospitalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPatientHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
