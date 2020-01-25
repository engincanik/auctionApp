import { Component,OnInit } from '@angular/core';
import { BidService } from './shared/bid.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BidService]
})
export class AppComponent {

  constructor(private bidService : BidService){}

  title = 'auctionApp';


}
