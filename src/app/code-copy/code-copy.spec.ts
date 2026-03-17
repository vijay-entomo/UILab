import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCopy } from './code-copy';

describe('CodeCopy', () => {
  let component: CodeCopy;
  let fixture: ComponentFixture<CodeCopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCopy],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeCopy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
