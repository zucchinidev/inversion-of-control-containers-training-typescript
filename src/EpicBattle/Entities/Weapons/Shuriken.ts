import { injectable } from 'inversify';
import { Weapon } from '../../Interfaces';

@injectable()
export class Shuriken implements Weapon {
  public name: string;
  constructor () {
    this.name = 'Shuriken';
  }
}
