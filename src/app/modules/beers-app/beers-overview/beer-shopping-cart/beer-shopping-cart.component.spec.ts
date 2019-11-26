import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerShoppingCartComponent } from './beer-shopping-cart.component';

describe('BeerShoppingCartComponent', () => {
  let component: BeerShoppingCartComponent;
  let fixture: ComponentFixture<BeerShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
