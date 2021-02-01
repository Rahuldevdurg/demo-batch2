import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent
  implements OnInit, AfterContentInit, AfterContentChecked {
  @Input() header: string;
  isShown: boolean = false;
  constructor() {}
  ngAfterContentInit(): void {
    console.log(
      'Inside ngAfterContentInit AccordianComponent ',
      this.goSomewhereButton?.nativeElement
    );
  }
  ngAfterContentChecked(): void {
    console.log(
      'Inside ngAfterContentChecked AccordianComponent ',
      this.goSomewhereButton?.nativeElement
    );
  }
  @ContentChild('goSomewhere') goSomewhereButton: ElementRef;

  ngOnInit(): void {
    console.log('Inside OnInit AccordianComponent ', this.goSomewhereButton);
  }
}
