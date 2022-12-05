import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridMovementComponent } from './table-grid-movement.component';

describe('TableGridMovementComponent', () => {
  let component: TableGridMovementComponent;
  let fixture: ComponentFixture<TableGridMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGridMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGridMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
