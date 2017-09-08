import { inject, injectable } from 'inversify';
import { Warrior, Weapon } from '../../Interfaces';
import { IDENTIFIERS } from '../../Constants/identifiers';

@injectable()
export class Ninja implements Warrior {
  public name: string;

  public constructor (
    @inject(IDENTIFIERS.WEAPON) public weapon: Weapon
  ) {
    this.name = 'Ninja';
  }
}
