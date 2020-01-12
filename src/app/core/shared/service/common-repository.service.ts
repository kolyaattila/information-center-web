import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { environment } from '../../../../environments/environment';
import {Subscription} from '../models/Subscription';

@Injectable()
export class CommonRepositoryService {

    constructor(private http: HttpClient) {
    }

    subscription(subscription: Subscription) {
        return this.http.post(`${environment.subscription}`, subscription);
      }

}