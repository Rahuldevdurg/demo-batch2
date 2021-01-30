import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `
    <h2 #header>Inside Parent Component</h2>
    <input type="text" placeholder="Message" #message />
    <button type="button" (click)="logMessage()">Log Message</button>
  `,
})
export class ParentComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('message') messageInput: ElementRef;
  @ViewChild('header') headerTag: ElementRef;

  constructor() {
    console.log('Inside constructor - ', this.messageInput);
  }
  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit - ', this.messageInput);
  }

  ngAfterViewChecked(): void {
    console.log('Inside ngAfterViewChecked - ', this.messageInput);
  }
  ngOnInit(): void {
    console.log('Inside ngOnInit - ', this.messageInput);
  }

  logMessage() {
    console.log(this.messageInput.nativeElement.value);
    console.log(this.headerTag.nativeElement.innerHTML);
  }
}
