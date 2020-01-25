import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bidder3Component } from './bidder3.component';

describe('Bidder3Component', () => {
  let component: Bidder3Component;
  let fixture: ComponentFixture<Bidder3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bidder3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bidder3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
