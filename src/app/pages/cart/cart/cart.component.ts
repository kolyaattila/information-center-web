import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../core/services/cart.service';
import {CartProduct} from '../../../shared/models/CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
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

  removeProduct(product: CartProduct) {
    this.cartService.removeProduct(product);
    this.cartProducts = this.cartService.getCartProducts();
  }

  get disabled() {
    return this.cartService.isAnyProductInCart();
  }
}
