import { injectable, inject } from 'inversify';
import * as uuid from 'uuid';
import { Product } from '../../Interfaces';
import { SERVICE_IDENTIFIERS } from '../../Constants/identifiers';

@injectable()
export class Glasses implements Product {
  public productId: string;
  public name: string;

  constructor (@inject(SERVICE_IDENTIFIERS.glassesPrice) public productPrice: number) {
    this.productId = uuid.v1();
    this.name = 'Glasses';
  }
}
