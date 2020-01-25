import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Bid } from './bid.model';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  selectedBid: Bid;
  bids: Bid[];
  readonly  baseUrl = "http://localhost:3000/bids";
  constructor(private http : HttpClient) { }

  postBid(bid : Bid){
    return this.http.post(this.baseUrl, bid);
  }

  getBids(){
    return this.http.get(this.baseUrl);
  }

  deleteBids(){
    return this.http.delete(this.baseUrl);
  }

}
