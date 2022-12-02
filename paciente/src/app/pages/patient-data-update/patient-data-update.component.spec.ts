import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataUpdateComponent } from './patient-data-update.component';

describe('PatientDataUpdateComponent', () => {
  let component: PatientDataUpdateComponent;
  let fixture: ComponentFixture<PatientDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
