import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../../../../models/beers';

@Component({
  selector: 'app-beers-product',
  templateUrl: './beers-product.component.html'
})
export class BeersProductComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
