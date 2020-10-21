import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private _http: HttpClient;
  private _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  getReviews() {
    return this._http.get<Review[]>(this._baseUrl + "Reviews/GetReviews");
  }
  
}

export interface Review {
  id: number;
  text: string;
  email: string;
}
