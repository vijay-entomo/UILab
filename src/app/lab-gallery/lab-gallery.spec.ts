import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabGallery } from './lab-gallery';

describe('LabGallery', () => {
  let component: LabGallery;
  let fixture: ComponentFixture<LabGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(LabGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
