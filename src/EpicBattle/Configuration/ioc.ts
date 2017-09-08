import 'reflect-metadata';
import { Container } from 'inversify';
import { IDENTIFIERS } from '../Constants/identifiers';
import { Ninja } from '../Entities/Warriors/Ninja';
import { TAG } from '../Constants/tags';
import { Samurai } from '../Entities/Warriors/Samurai';
import { Weapon, Warrior, Battle } from '../Interfaces';
import { Katana } from '../Entities/Weapons/Katana';
import { Shuriken } from '../Entities/Weapons/Shuriken';
import { EpicBattle } from '../Entities/Battles/EpicBattle';

const container = new Container();
container.bind<Warrior>(IDENTIFIERS.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
container.bind<Warrior>(IDENTIFIERS.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
container.bind<Weapon>(IDENTIFIERS.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
container.bind<Weapon>(IDENTIFIERS.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);
container.bind<Battle>(IDENTIFIERS.BATTLE).to(EpicBattle);

export default container;
