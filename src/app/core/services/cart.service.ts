import {Injectable} from '@angular/core';
import {CartProduct} from '../../shared/models/CartProduct';
import {Order} from '../../shared/models/Order';
import {AccountService} from './account.service';
import {Course} from '../../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private coupon = 0;
  private cartProducts: CartProduct[] = [
    {
      name: 'Time Management',
      price: 30,
      courseExternalId: '3523fff-df34nr9f-f30r9f'
    },
    {
      name: 'Bazele marketingului digital',
      price: 20,
      courseExternalId: '3523fff-df34nr9f-f30r9fw'
    }
  ];
  private orders: Order[] = [];

  constructor(private accountService: AccountService) {
  }

  getCartProducts(): CartProduct[] {
    return this.cartProducts;
  }

  get totalPrice() {
    let price = 0;
    this.cartProducts.forEach(product => price += product.price);
    return price;
  }

  getCoupon() {
    return this.coupon;
  }

  removeProduct(productToDelete: CartProduct) {
    let productIndex = -1;
    this.cartProducts.forEach((product, index) => {
        if (product.courseExternalId === productToDelete.courseExternalId) {
          productIndex = index;
        }
      }
    );

    if (productIndex !== -1) {
      this.cartProducts.splice(productIndex, 1);
    }
  }

  order() {
    const order = new Order();
    order.date = new Date();
    order.price = this.totalPrice;
    order.orderId = new Date().getMilliseconds();
    order.courses = this.cartProducts;
    this.accountService.getCurrentAccount().subscribe(response => order.userExternalId = response.uid);
    this.orders.push(order);
    this.cartProducts = [];
  }

  getOrders(): Order[] {
    return this.orders;
  }

  addCurs(course: Course) {
    if (this.isInCart(course)) {
      return;
    }

    const product = new CartProduct();
    product.courseExternalId = course.externalId;
    product.name = course.name;
    product.price = parseInt(course.price, 10);
    this.cartProducts.push(product);

  }

  isInCart(course: Course) {
    let respons = false;

    this.cartProducts.forEach(product => {
      if (product.courseExternalId === course.externalId) {
        respons = true;
      }
    });
    return respons;
  }

}
