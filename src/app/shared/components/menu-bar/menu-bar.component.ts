import {Component, OnInit} from '@angular/core';
import {Beer} from '../../../models/beers';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  cart: Beer[] = [];

  constructor( private store: Store<{ items: []; cart: [] }>) {
    // @ts-ignore
    store.pipe(select('shop')).subscribe(data => {
      // @ts-ignore
      this.cart = data.cart;
    });
  }

  ngOnInit() {
  }

}
