import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectivesExplanationPage } from './angular-directives-explanation.page';

describe('AngularDirectivesExplanationPage', () => {
  let component: AngularDirectivesExplanationPage;
  let fixture: ComponentFixture<AngularDirectivesExplanationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDirectivesExplanationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDirectivesExplanationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
