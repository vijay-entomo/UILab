import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperFeedback } from './developer-feedback';

describe('DeveloperFeedback', () => {
  let component: DeveloperFeedback;
  let fixture: ComponentFixture<DeveloperFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperFeedback],
    }).compileComponents();

    fixture = TestBed.createComponent(DeveloperFeedback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
