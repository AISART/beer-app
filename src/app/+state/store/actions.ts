import {Action} from '@ngrx/store';

export interface Product {
  id: number;
  Bier: string;
  Stamwortgehalte: string;
  Stijl: string;
  Alcoholpercentage: string;
  Gisting: string;
  Sinds: string;
  Brouwerij: string;
}

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Product] Load items from server',
  LoadSuccess = '[Product] Load success',
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems;
