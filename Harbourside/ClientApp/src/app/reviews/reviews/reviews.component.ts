import { Component, OnInit } from '@angular/core';
import { ReviewsService, Review } from '../../reviews-service/reviews.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private reviewsService: ReviewsService) { }
  private reviews: Observable<Review[]>;
  ngOnInit() {
    this.reviews = this.reviewsService.getReviews();
    //this.reviews$.subscribe(r => console.log(r));
  }

}
