import { Component, OnInit } from '@angular/core';
import { BidService } from '../shared/bid.service';
import { Bid } from '../shared/bid.model';
import { Pipe } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
  providers: [BidService]
})



export class BidComponent implements OnInit {

  constructor(private bidService: BidService) { }

  dateObj = new Date();
  deadline = this.dateObj.getHours() + 1;
  timeLeft: number = 3600; // Countdown time for auction 3600 seconds = 1 hour
  timeLeft2: number = 10; // Countdown time for refresh the page 10 seconds
  interval;
  interval2;
  showAlert = true;

  // Start the countdown for 1 hour
  // Every second refresh the bid section
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.getHighestBidder(); //Will refresh highest bid and bidder in one second
      } else if (this.timeLeft == 0) { // When countdown is ended,
        if (this.showAlert == true) { // say "Auction is over!" 
        alert("Auction is over!");
          this.showAlert = false;
          this.secondPriceAuction(); // Winner will pay second highest bid + 1
          this.refreshInSeconds(); //Reload the page
        }
      }
    }, 1000)
  }

  //Start the timer on page load
  ngOnInit() {
    this.startTimer();
    this.getHighestBidder();
  }

  // Winner will pay second highest bid + 1
  secondPriceAuction() {
    if (this.bidService.bids.length == 1){ // if there is one bidding
      var x = document.getElementById("bid1");
      x.innerHTML = "Winner will pay: " + (this.bidService.bids[0].bidAmount) + "$";
      var y = document.getElementById("bidder1");
      y.innerHTML = "Winner: " + this.bidService.bids[0].userName;
    }else if(this.bidService.bids.length < 1){ // when there is no biddings
      var x = document.getElementById("bid2");
      x.innerHTML = "No biddings have been made";
      var y = document.getElementById("bidder2");
      y.innerHTML = "There is no winner";
    }else{ // more than 1 biddings 
      var x = document.getElementById("bid1");
      x.innerHTML = "Winner will pay: " + (this.bidService.bids[1].bidAmount + 1) + "$";
      var y = document.getElementById("bidder1");
      y.innerHTML = "Winner: " + this.bidService.bids[0].userName;
    }
    
  }

 //Reload the page
  refreshInSeconds(){
    this.interval = setInterval(() => {
      if (this.timeLeft2 > 0) {
        this.timeLeft2--;
      } else if (this.timeLeft2 == 0) { // When countdown is ended reload the page
          window.location.reload()
      }
    }, 1000)

  }

  //Get all bids then sort them to highest to lowest
  getHighestBidder() {
    this.bidService.getBids().subscribe((res) => {
      this.bidService.bids = res as Bid[];
      this.bidService.bids = this.bidService.bids.sort((a, b) => b.bidAmount - a.bidAmount);
    });
  }

  //Delete all document from a MongoDB collection for new Auction
  onDelete() {
    if (confirm('Are you sure to delete all biddings and start a new auction ?') == true) {
      this.bidService.deleteBids().subscribe((res) => {
        this.getHighestBidder();
        window.location.reload();
      });
    }
  }

}
