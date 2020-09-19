import {CartProduct} from './CartProduct';
import {Address} from './address';

export class Order {
  price: number;
  date: Date;
  userExternalId: string;
  courses?: CartProduct[];
  orderId: number;
  address: Address;
}
