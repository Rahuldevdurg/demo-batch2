import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit {
  @Input() header: string;
  isShown: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
