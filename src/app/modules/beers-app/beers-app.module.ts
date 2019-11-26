import {NgModule} from '@angular/core';
import {BeersAppRoutingModule} from './beers-app-routing.module';
import {BeersAppComponent} from './beers-app.component';
import { BeersOverviewComponent } from './beers-overview/beers-overview.component';
import {CommonModule} from '@angular/common';
import { BeersProductComponent } from './beers-overview/beers-product/beers-product.component';
import {SharedCoreModule} from '../../core/modules/shared-core.module';
import {MatIconModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ShopReducer} from '../../+state/store/reducer';
import {ShopEffects} from '../../+state/store/effects';
import { BeerShoppingCartComponent } from './beers-overview/beer-shopping-cart/beer-shopping-cart.component';

@NgModule({
  imports: [
    BeersAppRoutingModule,
    CommonModule,
    SharedCoreModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects])
  ],
  exports: [],
  declarations: [
    BeersAppComponent,
    BeersOverviewComponent,
    BeersProductComponent,
    BeerShoppingCartComponent
  ],
  providers: []
})

export class BeersAppModule {
}
