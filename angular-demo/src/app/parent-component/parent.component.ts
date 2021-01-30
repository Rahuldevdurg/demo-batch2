import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-component',
  template: ` <h2 #header>Inside Parent Component</h2>
    <hr />
    <app-child></app-child>
    <hr />
    <app-child></app-child>
    <hr />
    <app-child></app-child>
    <hr />
    <app-child></app-child>
    <button (click)="logOnParent()">Call Child Log</button>
    <button (click)="udpateTime()">Update Time</button>`,
})
export class ParentComponent implements AfterViewInit {
  constructor() {}
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterViewInit(): void {
    console.log(this.children.toArray());

    window.setInterval(() => {
      this.children.toArray().forEach((child) => {
        child.currentTime = new Date();
      });
    }, 1000);
  }
  logOnParent() {
    console.log('Logging from parent');
    //call the child log method
    //this.children.logFromChild();
  }

  udpateTime() {
    console.log('Updating Time...');
    //this.children.currentTime = new Date();
  }
}
