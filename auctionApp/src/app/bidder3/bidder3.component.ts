import { Component, OnInit } from '@angular/core';
import {BidService} from '../shared/bid.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bidder3',
  templateUrl: './bidder3.component.html',
  styleUrls: ['./bidder3.component.css'],
  providers: [BidService]
})
export class Bidder3Component implements OnInit {

  constructor(private bidService : BidService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form)
      form.reset();
    this.bidService.selectedBid = {
      _id: "",
      userName: "User3",
      bidAmount: null,
      date: null
    }
  }
  //Clear the input section and send form to db
  onSubmit(form : NgForm){
    form.value.userName = "User3"
    this.bidService.postBid(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

}
