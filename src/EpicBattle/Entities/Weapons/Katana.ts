import { injectable } from 'inversify';
import { Weapon } from '../../Interfaces';

@injectable()
export class Katana implements Weapon {
  public name: string;
  public constructor () {
    this.name = 'Katana';
  }
}
