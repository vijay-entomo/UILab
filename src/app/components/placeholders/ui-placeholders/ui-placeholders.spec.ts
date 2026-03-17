import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPlaceholders } from './ui-placeholders';

describe('UiPlaceholders', () => {
  let component: UiPlaceholders;
  let fixture: ComponentFixture<UiPlaceholders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPlaceholders],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPlaceholders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
