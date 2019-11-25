import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersProductComponent } from './beers-product.component';

describe('BeersProductComponent', () => {
  let component: BeersProductComponent;
  let fixture: ComponentFixture<BeersProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
