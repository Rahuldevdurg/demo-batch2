import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
  currentProduct: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentProduct = +this.activatedRoute.snapshot.paramMap.get('id');
  }
}
