import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHospitalizationAllInformationComponent } from './modal-hospitalization-all-information.component';

describe('ModalHospitalizationAllInformationComponent', () => {
  let component: ModalHospitalizationAllInformationComponent;
  let fixture: ComponentFixture<ModalHospitalizationAllInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHospitalizationAllInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHospitalizationAllInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
