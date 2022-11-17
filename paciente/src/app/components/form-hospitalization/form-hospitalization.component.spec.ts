import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHospitalizationComponent } from './form-hospitalization.component';

describe('FormHospitalizationComponent', () => {
  let component: FormHospitalizationComponent;
  let fixture: ComponentFixture<FormHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHospitalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
