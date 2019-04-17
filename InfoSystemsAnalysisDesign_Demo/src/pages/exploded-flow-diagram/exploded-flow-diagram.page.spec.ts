import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplodedFlowDiagramPage } from './exploded-flow-diagram.page';

describe('ExplodedFlowDiagramPage', () => {
  let component: ExplodedFlowDiagramPage;
  let fixture: ComponentFixture<ExplodedFlowDiagramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplodedFlowDiagramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplodedFlowDiagramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
