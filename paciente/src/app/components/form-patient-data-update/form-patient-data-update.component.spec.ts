import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPatientDataUpdateComponent } from './form-patient-data-update.component';

describe('FormPatientDataUpdateComponent', () => {
  let component: FormPatientDataUpdateComponent;
  let fixture: ComponentFixture<FormPatientDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPatientDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPatientDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
