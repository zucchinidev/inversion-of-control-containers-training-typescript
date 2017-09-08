import { inject, named, injectable } from 'inversify';
import { Battle, Warrior } from '../../Interfaces';
import { IDENTIFIERS } from '../../Constants/identifiers';
import { TAG } from '../../Constants/tags';

@injectable()
export class EpicBattle implements Battle {

  constructor (@inject(IDENTIFIERS.WARRIOR) @named(TAG.CHINESE) public warriorOne: Warrior,
               @inject(IDENTIFIERS.WARRIOR) @named(TAG.JAPANESE) public warriorTwo: Warrior) {

  }

  public fight (): string {
    return `FIGHT!
                ${this.warriorOne.name} (${this.warriorOne.weapon.name})
                vs
                ${this.warriorTwo.name} (${this.warriorTwo.weapon.name})`;
  }
}
