/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {BannerInlineComponent} from './banner-inline.component';

describe('BannerInlineComponent', () => {
    let comp: BannerInlineComponent;
    let fixture: ComponentFixture<BannerInlineComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BannerInlineComponent]
        })
            .compileComponents();

    }));

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerInlineComponent]
        });

        fixture = TestBed.createComponent(BannerInlineComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;

        //fixture.detectChanges();
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    })

});
