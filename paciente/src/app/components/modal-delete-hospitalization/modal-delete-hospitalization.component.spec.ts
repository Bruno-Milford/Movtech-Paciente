import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteHospitalizationComponent } from './modal-delete-hospitalization.component';

describe('ModalDeleteHospitalizationComponent', () => {
  let component: ModalDeleteHospitalizationComponent;
  let fixture: ComponentFixture<ModalDeleteHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteHospitalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
