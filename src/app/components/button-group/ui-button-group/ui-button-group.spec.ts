import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonGroup } from './ui-button-group';

describe('UiButtonGroup', () => {
  let component: UiButtonGroup;
  let fixture: ComponentFixture<UiButtonGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtonGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButtonGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
