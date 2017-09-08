import { IDENTIFIERS } from './EpicBattle/Constants/identifiers';
import { Battle } from './EpicBattle/Interfaces';
import container from './EpicBattle/Configuration/ioc';
import { shoppingContainer } from './Shopping/Configuration/ioc';
import { SERVICE_IDENTIFIERS } from './Shopping/Constants/identifiers';
import { IOrder } from './Shopping/Interfaces';

// Composition root
const epicBattle = container.get<Battle>(IDENTIFIERS.BATTLE);
const order = shoppingContainer.get<IOrder>(SERVICE_IDENTIFIERS.ORDER);

console.log(epicBattle.fight());
console.log(order.show());
