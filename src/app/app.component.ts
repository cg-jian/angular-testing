import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';

@Component({
  selector: 'app-app',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

    <app-product *ngFor="let product of products" [product]="product"></app-product>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  products = PRODUCTS;

  constructor() {}

  ngOnInit() {}
}
