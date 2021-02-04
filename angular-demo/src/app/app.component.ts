import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World {{ title }}</h1>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title: string = 'angular-demo';
  address: string = 'Odisha';
}
