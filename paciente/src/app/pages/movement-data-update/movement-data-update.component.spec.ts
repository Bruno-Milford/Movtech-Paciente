import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementDataUpdateComponent } from './movement-data-update.component';

describe('MovementDataUpdateComponent', () => {
  let component: MovementDataUpdateComponent;
  let fixture: ComponentFixture<MovementDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
