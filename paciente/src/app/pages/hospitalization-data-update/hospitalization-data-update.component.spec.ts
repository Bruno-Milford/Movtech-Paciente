import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationDataUpdateComponent } from './hospitalization-data-update.component';

describe('HospitalizationDataUpdateComponent', () => {
  let component: HospitalizationDataUpdateComponent;
  let fixture: ComponentFixture<HospitalizationDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalizationDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalizationDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
