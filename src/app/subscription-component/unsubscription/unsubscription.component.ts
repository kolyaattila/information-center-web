import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-unsubscriptio',
  templateUrl: './unsubscription.component.html',
  styleUrls: ['./unsubscription.component.scss']
})
export class UnsubscriptionComponent implements OnInit {

  constructor(private router: Router,
    private commonRepository: CommonRepositoryService,
    private toastr: ToastrService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    var uid;
    this.activeRoute.params.subscribe( params => {uid=params.uid;
    } );
    this.commonRepository.unsubscription(uid).subscribe(
      () => {this.toastr.success("Te-ai dezabonat cu succes!")},
      () => {this.toastr.warning("A aparut o erroare, incercati mai tarziu")}
    )
    this.router.navigate(['/'])
  }

}
