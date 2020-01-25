import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bidder1Component } from './bidder1.component';

describe('Bidder1Component', () => {
  let component: Bidder1Component;
  let fixture: ComponentFixture<Bidder1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bidder1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bidder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
