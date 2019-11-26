import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../../../../models/beers';
import {Store} from '@ngrx/store';
import {AddToCart} from '../../../../+state/store/actions';

@Component({
  selector: 'app-beers-product',
  templateUrl: './beers-product.component.html'
})
export class BeersProductComponent implements OnInit {
  @Input() beer: Beer;

  constructor(private store: Store<{ items: []; cart: [] }>) {
  }

  addToCart(item: Beer) {
    this.store.dispatch(new AddToCart(item));
  }

  ngOnInit() {
  }

}
