import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedGradientButton } from './animated-gradient-button';

describe('AnimatedGradientButton', () => {
  let component: AnimatedGradientButton;
  let fixture: ComponentFixture<AnimatedGradientButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedGradientButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedGradientButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
