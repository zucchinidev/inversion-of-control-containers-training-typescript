import { injectable, inject } from 'inversify';
import { Person } from '../Interfaces';
import { SERVICE_IDENTIFIERS } from '../Constants/identifiers';

@injectable()
export class Customer implements Person {
  constructor (@inject(SERVICE_IDENTIFIERS.customerAddress) public address: string,
               @inject(SERVICE_IDENTIFIERS.customerName) public name: string) {
  }
}
