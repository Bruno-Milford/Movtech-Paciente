import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPatientRecordComponent } from './model-patient-record.component';

describe('ModelPatientRecordComponent', () => {
  let component: ModelPatientRecordComponent;
  let fixture: ComponentFixture<ModelPatientRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPatientRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPatientRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
