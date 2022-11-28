import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPatientAllInformationComponent } from './modal-patient-all-information.component';

describe('ModalPatientAllInformationComponent', () => {
  let component: ModalPatientAllInformationComponent;
  let fixture: ComponentFixture<ModalPatientAllInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPatientAllInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPatientAllInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
