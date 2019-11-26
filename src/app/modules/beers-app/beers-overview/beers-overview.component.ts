import { Component, OnInit } from '@angular/core';
import {AppSettingsService} from '../../../services/app-settings.service';
import {Beer} from '../../../models/beers';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-beers-overview',
  templateUrl: './beers-overview.component.html'
})
export class BeersOverviewComponent implements OnInit {
  beers: Beer[];
  beerResults = false;

  constructor(private appSettingsService: AppSettingsService,
              private route: ActivatedRoute,
              private store: Store<{ items: Beer[]; cart: [] }>) {
    // @ts-ignore
    store.pipe(select('shop')).subscribe(data => {
      // @ts-ignore
      this.beers = data.items;
    });
  }

  ngOnInit() {
    this.appSettingsService.getJSON()
      .subscribe((data) => {
        this.beers = data;
      });
  }
}
