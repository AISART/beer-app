import {RouterModule, Routes} from '@angular/router';
import {BeersAppComponent} from './beers-app.component';
import {NgModule} from '@angular/core';
import {BeersOverviewComponent} from './beers-overview/beers-overview.component';

const ROUTES: Routes = [
  {
    path: '',
    component: BeersAppComponent,
    children: [
      {
        path: 'beers',
        component: BeersOverviewComponent
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
