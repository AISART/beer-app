import {Component, OnInit} from '@angular/core';
import {Beer} from '../../../../models/beers';
import {select, Store} from '@ngrx/store';
import {GetItems} from '../../../../+state/store/actions';

@Component({
  selector: 'app-beer-shopping-cart',
  templateUrl: './beer-shopping-cart.component.html'
})
export class BeerShoppingCartComponent implements OnInit {
  cart: Beer[] = [];

  constructor( private store: Store<{ items: []; cart: [] }>) {
    // @ts-ignore
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }

}
