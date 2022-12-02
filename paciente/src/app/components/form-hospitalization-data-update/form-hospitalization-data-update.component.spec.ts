import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHospitalizationDataUpdateComponent } from './form-hospitalization-data-update.component';

describe('FormHospitalizationDataUpdateComponent', () => {
  let component: FormHospitalizationDataUpdateComponent;
  let fixture: ComponentFixture<FormHospitalizationDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHospitalizationDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHospitalizationDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
