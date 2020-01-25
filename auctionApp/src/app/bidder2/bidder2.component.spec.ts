import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bidder2Component } from './bidder2.component';

describe('Bidder2Component', () => {
  let component: Bidder2Component;
  let fixture: ComponentFixture<Bidder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bidder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bidder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
