import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit, OnDestroy {
  constructor() {}

  counter: number = 0;

  ngOnInit(): void {
    this.counter++;
    console.log('Inside ngOnInit() of TestComponentComponent - ', this.counter);
  }

  ngOnDestroy(): void {
    this.counter++;
    console.log(
      'Inside ngOnDestroy() of TestComponentComponent - ',
      this.counter
    );
  }
}
