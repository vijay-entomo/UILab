import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPage } from './component-page';

describe('ComponentPage', () => {
  let component: ComponentPage;
  let fixture: ComponentFixture<ComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
