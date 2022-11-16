import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridPatientComponent } from './table-grid-patient.component';

describe('TableGridPatientComponent', () => {
  let component: TableGridPatientComponent;
  let fixture: ComponentFixture<TableGridPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGridPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGridPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
