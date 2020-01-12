import { Component, OnInit } from '@angular/core';
import {SubscriptionService} from '../core/services/subscription.service';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import {Subscription} from '../core/shared/models/Subscription';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-component',
  templateUrl: './subscription-component.component.html',
  styleUrls: ['./subscription-component.component.scss']
})
export class SubscriptionComponentComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService,
    private toastr: ToastrService) { }

  subscriptionForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    lastName: new FormControl('',{
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    email:new FormControl('',{
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]
    })
  });

  ngOnInit() {
  }

  onSubmit(){
    this.subscriptionService.subscription(new Subscription(this.subscriptionForm.value.firstName,
        this.subscriptionForm.value.email,
        this.subscriptionForm.value.lastName))
      .subscribe(
        () => {this.subscriptionForm.reset(); this.toastr.success("V-ati alaturat cu succes!")},
        (e) => {console.log(e);this.toastr.warning(e.error.message)}
      );
  }

  get firstName() { return this.subscriptionForm.get('firstName'); }
  get lastName() { return this.subscriptionForm.get('lastName');}
  get email() { return this.subscriptionForm.get('email'); }

  getColorClass(fild:string){
    return this.subscriptionForm.get(fild).invalid 
            && (this.subscriptionForm.get(fild).dirty 
            || this.subscriptionForm.get(fild).touched) ? 'text-danger':'text-white';
  }

}
