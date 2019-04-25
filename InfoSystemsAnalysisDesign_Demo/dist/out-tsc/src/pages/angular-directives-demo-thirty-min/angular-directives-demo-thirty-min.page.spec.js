import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { AngularDirectivesDemoThirtyMinPage } from './angular-directives-demo-thirty-min.page';
describe('AngularDirectivesDemoThirtyMinPage', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AngularDirectivesDemoThirtyMinPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AngularDirectivesDemoThirtyMinPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=angular-directives-demo-thirty-min.page.spec.js.map