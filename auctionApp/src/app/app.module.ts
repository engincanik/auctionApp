import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidComponent } from './bid/bid.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Bidder1Component } from './bidder1/bidder1.component';
import { Bidder2Component } from './bidder2/bidder2.component';
import { Bidder3Component } from './bidder3/bidder3.component';

@NgModule({
  declarations: [
    AppComponent,
    BidComponent,
    Bidder1Component,
    Bidder2Component,
    Bidder3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
