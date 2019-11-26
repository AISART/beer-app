import {RouterModule, Routes} from '@angular/router';
import {BeersAppComponent} from './beers-app.component';
import {NgModule} from '@angular/core';
import {BeersOverviewComponent} from './beers-overview/beers-overview.component';
import {BeerResolver} from '../../resolvers/beer.resolver';
import {BeerShoppingCartComponent} from './beers-overview/beer-shopping-cart/beer-shopping-cart.component';

const ROUTES: Routes = [
  {
    path: '',
    component: BeersAppComponent,
    resolve: {beer : BeerResolver},
    children: [
      {
        path: 'beers',
        component: BeersOverviewComponent,
        resolve: {beer : BeerResolver}
      },
      {
        path: 'shopping',
        component: BeerShoppingCartComponent,
        resolve: {beer : BeerResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class BeersAppRoutingModule {
}
