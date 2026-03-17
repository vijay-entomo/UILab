import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomCursor } from './my-custom-cursor';

describe('MyCustomCursor', () => {
  let component: MyCustomCursor;
  let fixture: ComponentFixture<MyCustomCursor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomCursor],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCustomCursor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
