import { Component, OnInit } from '@angular/core';
import {AppSettingsService} from '../../../services/app-settings.service';
import {Beer} from '../../../models/beers';

@Component({
  selector: 'app-beers-overview',
  templateUrl: './beers-overview.component.html'
})
export class BeersOverviewComponent implements OnInit {

  beers: Beer[];

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data => {
      this.beers = data;
    });
  }

}
