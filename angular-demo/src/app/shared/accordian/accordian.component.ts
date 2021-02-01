import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { ChildComponent } from 'src/app/child/child.component';
import { TimerComponent } from 'src/app/timer/timer.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit, AfterContentInit {
  @Input() header: string;
  isShown: boolean = false;
  // @ContentChild('goSomewhere') goSomewhereButton: ElementRef;

  @ContentChild(TimerComponent) timerComps: TimerComponent;

  constructor() {}
  ngAfterContentInit(): void {
    console.log(
      'Inside ngAfterContentInit AccordianComponent ',
      this.timerComps
    );

    window.setInterval(() => {
      this.timerComps.currentTime = new Date();
    }, 1000);
  }
  // ngAfterContentChecked(): void {
  //   console.log('Inside ngAfterContentChecked AccordianComponent ');
  // }

  ngOnInit(): void {
    console.log('Inside OnInit AccordianComponent ', this.timerComps);
  }
}
