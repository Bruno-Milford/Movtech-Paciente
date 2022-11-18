import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovementComponent } from './form-movement.component';

describe('FormMovementComponent', () => {
  let component: FormMovementComponent;
  let fixture: ComponentFixture<FormMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
