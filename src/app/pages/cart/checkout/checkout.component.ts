import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartProduct} from '../../../shared/models/CartProduct';
import {CartService} from '../../../core/services/cart.service';
import {Address} from '../../../shared/models/address';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  addressFormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.min(3),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')
      ]
    }),
    primaryAddress: new FormControl('', {
      validators: [
        Validators.required,
        Validators.min(5),
        Validators.maxLength(50),
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')
      ]
    }),
    secondAddress: new FormControl('', {}),
    city: new FormControl('', {
      validators: [
        Validators.min(3),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')
      ]
    }),
    state: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(30),
        Validators.min(4),
        Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')
      ]
    }),
    postalCode: new FormControl('', {
      validators: [
        Validators.required,
        Validators.min(6),
        Validators.maxLength(6),
        Validators.pattern(/^[0-9]\d*$/),
      ]
    }),
    phoneNumber: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]\d*$/),
        Validators.min(10)
      ]
    })
  });
  cartProducts: CartProduct[] = [];

  get totalPrice() {
    return this.cartService.totalPrice;
  }

  get coupon() {
    return this.cartService.getCoupon();
  }

  constructor(private cartService: CartService) {
    this.cartProducts = cartService.getCartProducts();
  }

  ngOnInit() {
  }


  order() {
    const address = new Address();
    address.name = this.name;
    address.address1 = this.primaryAddress;
    address.address2 = this.secondAddress;
    address.city = this.city;
    address.country = this.state;
    address.zipCode = this.postalCode;
    address.phoneNumber = this.phoneNumber;
    this.cartService.order(address);
  }

  get name() {
    return this.addressFormGroup.get('name').value;
  }

  get primaryAddress() {
    return this.addressFormGroup.get('primaryAddress').value;
  }

  get secondAddress() {
    return this.addressFormGroup.get('secondAddress').value;
  }

  get state() {
    return this.addressFormGroup.get('state').value;
  }

  get postalCode() {
    return this.addressFormGroup.get('postalCode').value;
  }

  get phoneNumber() {
    return this.addressFormGroup.get('phoneNumber').value;
  }

  get city() {
    return this.addressFormGroup.get('city').value;
  }
}
