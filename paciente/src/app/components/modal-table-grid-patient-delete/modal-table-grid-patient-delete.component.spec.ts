import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTableGridPatientDeleteComponent } from './modal-table-grid-patient-delete.component';

describe('ModalTableGridPatientDeleteComponent', () => {
  let component: ModalTableGridPatientDeleteComponent;
  let fixture: ComponentFixture<ModalTableGridPatientDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTableGridPatientDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTableGridPatientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
