import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCarousel } from './ui-carousel';

describe('UiCarousel', () => {
  let component: UiCarousel;
  let fixture: ComponentFixture<UiCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
