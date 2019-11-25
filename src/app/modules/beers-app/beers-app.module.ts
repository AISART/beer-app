import {NgModule} from '@angular/core';
import {BeersAppRoutingModule} from './beers-app-routing.module';
import {BeersAppComponent} from './beers-app.component';
import { BeersOverviewComponent } from './beers-overview/beers-overview.component';
import {CommonModule} from '@angular/common';
import { BeersProductComponent } from './beers-overview/beers-product/beers-product.component';
import {SharedCoreModule} from '../../core/modules/shared-core.module';

@NgModule({
  imports: [
    BeersAppRoutingModule,
    CommonModule,
    SharedCoreModule
  ],
  exports: [],
  declarations: [
    BeersAppComponent,
    BeersOverviewComponent,
    BeersProductComponent
  ],
  providers: []
})

export class BeersAppModule {
}
