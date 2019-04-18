import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectivesDemoPage } from './angular-directives-demo.page';

describe('AngularDirectivesDemoPage', () => {
  let component: AngularDirectivesDemoPage;
  let fixture: ComponentFixture<AngularDirectivesDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDirectivesDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDirectivesDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
