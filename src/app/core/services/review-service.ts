import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private repositoryService: CommonRepositoryService,
              private accountService: AccountService) {
  }

  reviewMade: {
    courseExternalId: string,
    stars: number
  }[] = [];

  makeReview(stars: number, courseExternalId: string) {
    this.reviewMade.push({courseExternalId, stars});
    this.accountService.getCurrentAccount().subscribe(data => {
      this.repositoryService.makeReview(stars, courseExternalId, data.uid).subscribe(error => console.log(error));
    });
  }

  hasReview(courseExternalId) {
    let stars = 0;
    this.reviewMade.forEach(value => {
        if (courseExternalId === value.courseExternalId) {
          stars = value.stars;
        }
      }
    );
    return stars;
  }


}
