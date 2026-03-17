import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGrid } from './hero-grid';

describe('HeroGrid', () => {
  let component: HeroGrid;
  let fixture: ComponentFixture<HeroGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
