import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridHospitalizationComponent } from './table-grid-hospitalization.component';

describe('TableGridHospitalizationComponent', () => {
  let component: TableGridHospitalizationComponent;
  let fixture: ComponentFixture<TableGridHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGridHospitalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGridHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
