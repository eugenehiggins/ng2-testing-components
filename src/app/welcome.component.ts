import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h3 class="welcome"><i>{{ welcome }}</i></h3>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {
    welcome = '-- not initialized yet --';

  constructor() { }

  ngOnInit() {
  }

}
