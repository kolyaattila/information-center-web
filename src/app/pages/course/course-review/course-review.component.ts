import {Component, Input, OnInit} from '@angular/core';
import {Rating} from '../../../shared/models/rating';
import {ReviewService} from '../../../core/services/review-service';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.scss']
})
export class CourseReviewComponent implements OnInit {
  @Input('rating') rating: Rating;
  @Input('courseExternalId') private courseExternalId: string;

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
  }


  percentagePerStars(numberReviews) {
    return (numberReviews * 100 / this.rating.numberOfReviews) + '%';
  }

  getAverageReview() {
    const number = this.reviewService.hasReview(this.courseExternalId);

    if (number) {
      return number;
    }
    return this.rating.average;
  }

  makeReview($event: number) {
    console.log($event);
    this.reviewService.makeReview($event, this.courseExternalId);
  }
}
