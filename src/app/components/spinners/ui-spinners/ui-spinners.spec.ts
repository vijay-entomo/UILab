import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSpinners } from './ui-spinners';

describe('UiSpinners', () => {
  let component: UiSpinners;
  let fixture: ComponentFixture<UiSpinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSpinners],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSpinners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
