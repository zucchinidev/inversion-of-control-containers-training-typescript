import { IDENTIFIERS } from './EpicBattle/Constants/identifiers';
import { Battle } from './EpicBattle/Interfaces';
import container from './EpicBattle/Configuration/ioc';

// Composition root
const epicBattle = container.get<Battle>(IDENTIFIERS.BATTLE);

console.log(epicBattle.fight());
