import { Component, OnInit } from '@angular/core';
import {BidService} from '../shared/bid.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bidder2',
  templateUrl: './bidder2.component.html',
  styleUrls: ['./bidder2.component.css'],
  providers: [BidService]
})
export class Bidder2Component implements OnInit {

  constructor(private bidService : BidService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form)
      form.reset();
    this.bidService.selectedBid = {
      _id: "",
      userName: "User2",
      bidAmount: null,
      date: null
    }
  }
  //Clear the input section and send form to db
  onSubmit(form : NgForm){
    form.value.userName = "User2";
    this.bidService.postBid(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

}
