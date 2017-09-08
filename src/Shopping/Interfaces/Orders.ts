import { Product } from './Product';

export interface IOrder {
  orderId: string;
  products: Array<Product>;

  show(): string;
}
