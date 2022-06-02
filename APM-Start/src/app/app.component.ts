import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <div>
        <h1>{{ pageTitle }}</h1>
      </div>
      <pm-products></pm-products>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
