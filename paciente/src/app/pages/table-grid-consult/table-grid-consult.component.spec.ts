import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridConsultComponent } from './table-grid-consult.component';

describe('TableGridConsultComponent', () => {
  let component: TableGridConsultComponent;
  let fixture: ComponentFixture<TableGridConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGridConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGridConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
