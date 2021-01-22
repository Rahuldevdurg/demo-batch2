import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello World {{title}}</h1>',
})
export class AppComponent {
  title: string = 'angular-demo';
  address: string = 'Odisha';
}
