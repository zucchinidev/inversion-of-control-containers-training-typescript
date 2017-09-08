import { inject, injectable } from 'inversify';
import { Weapon, Warrior } from '../../Interfaces';
import { IDENTIFIERS } from '../../Constants/identifiers';

@injectable()
export class Samurai implements Warrior {
  public name: string;

  constructor (@inject(IDENTIFIERS.WEAPON) public weapon: Weapon) {
    this.name = 'Samurai';
  }
}
