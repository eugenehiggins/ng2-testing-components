import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-banner',
    template: `
  	'<h1>{{ title }} </h1>'
  `,
    styles: []
})
export class BannerInlineComponent implements OnInit {

    title = 'Test Tour of Heroes';

    constructor() {
    }

    ngOnInit() {
    }

}
