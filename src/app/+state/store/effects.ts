import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import {AppSettingsService} from '../../services/app-settings.service';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private appSettingsService: AppSettingsService
  ) {}

  @Effect()
  loadFruits$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.appSettingsService.getJSON().pipe(
        map(fruits => {
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
