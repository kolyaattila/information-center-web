import {CartProduct} from './CartProduct';

export class Order {
  price: number;
  date: Date;
  userExternalId: string;
  courses?: CartProduct[];
  orderId: number;
}
