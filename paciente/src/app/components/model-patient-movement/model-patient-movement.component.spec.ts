import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPatientMovementComponent } from './model-patient-movement.component';

describe('ModelPatientMovementComponent', () => {
  let component: ModelPatientMovementComponent;
  let fixture: ComponentFixture<ModelPatientMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPatientMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPatientMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
