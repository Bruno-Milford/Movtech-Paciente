import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridCostCenterComponent } from './table-grid-cost-center.component';

describe('TableGridCostCenterComponent', () => {
  let component: TableGridCostCenterComponent;
  let fixture: ComponentFixture<TableGridCostCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGridCostCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGridCostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
