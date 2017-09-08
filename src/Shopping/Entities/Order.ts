import { inject, injectable, multiInject } from 'inversify';
import * as uuid from 'uuid';
import { IOrder, Product, Person } from '../Interfaces';
import { SERVICE_IDENTIFIERS } from '../Constants/identifiers';

@injectable()
export class Order implements IOrder {
  public orderId: string;

  constructor (@multiInject(SERVICE_IDENTIFIERS.PRODUCT) public products: Array<Product>,
               @inject(SERVICE_IDENTIFIERS.CUSTOMER) public customer: Person) {
    this.orderId = uuid.v1();
  }

  public show (): string {
    const products = this.products
      .map((p: Product) => {
        return `\n        Product (${p.name}):
                          Price: ${p.productPrice}
                          ProductId: ${p.productId}`;
      }).join('');
    const customer = `
            Name: ${this.customer.name}
            Address: ${this.customer.address}`;
    return `Order : \n     Customer: ${customer}
                    \n     Products: ${products}`;
  }
}
