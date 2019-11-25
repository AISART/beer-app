import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersOverviewComponent } from './beers-overview.component';

describe('BeersOverviewComponent', () => {
  let component: BeersOverviewComponent;
  let fixture: ComponentFixture<BeersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
