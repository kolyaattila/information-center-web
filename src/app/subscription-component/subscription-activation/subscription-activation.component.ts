import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-subscription-activation',
  templateUrl: './subscription-activation.component.html',
  styleUrls: ['./subscription-activation.component.scss']
})
export class SubscriptionActivationComponent implements OnInit {

  constructor(private router: Router,
              private commonRepository: CommonRepositoryService,
              private toastr: ToastrService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let uid;
    this.activeRoute.params.subscribe(params => {
      uid = params.uid;
    });
    this.commonRepository.subscriptionActivation(uid).subscribe(
      () => {
        this.toastr.success('Email confirmat!');
      },
      () => {
        this.toastr.warning('A aparut o erroare, incercati mai tarziu');
      }
    );
    this.router.navigate(['/']);
  }

}
