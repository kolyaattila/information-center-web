import { Injectable } from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service'
import {Subscription} from '../shared/models/Subscription'

@Injectable({
    providedIn: 'root'
  })
  export class SubscriptionService {

    constructor(private repositoryService: CommonRepositoryService) {
    }

    subscription(subscription:Subscription){
        return this.repositoryService.subscription(subscription);
    }
  }