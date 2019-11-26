import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Beer} from '../models/beers';
import {AppSettingsService} from '../services/app-settings.service';

@Injectable()
export class BeerResolver implements Resolve<Beer[]> {
  constructor(private appSettingsService: AppSettingsService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Beer[]> {
    return this.appSettingsService.getJSON().pipe(
      catchError(error => {
        this.router.navigate(['/beer']);
        return of(null);
      })
    );
  }
}
