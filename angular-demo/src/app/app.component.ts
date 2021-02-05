import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-http-loader></ng-http-loader>
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title: string = 'angular-demo';
  address: string = 'Odisha';
}
