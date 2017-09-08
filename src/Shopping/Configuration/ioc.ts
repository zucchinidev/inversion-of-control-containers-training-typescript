import { Container, interfaces } from 'inversify';
import { Chance } from 'chance';
import { Product, IOrder, Person } from '../Interfaces';
import { SERVICE_IDENTIFIERS } from '../Constants/identifiers';
import { Glasses } from '../Entities/Products/Glasses';
import { Keyboard } from '../Entities/Products/Keyboard';
import { Order } from '../Entities/Order';
import { Customer } from '../Entities/Customer';

const chance = Chance();
const shoppingContainer = new Container();
shoppingContainer.bind<number>(SERVICE_IDENTIFIERS.glassesPrice).toConstantValue(100);
shoppingContainer
  .bind<number>(SERVICE_IDENTIFIERS.keyboardPrice)
  .toDynamicValue((context: interfaces.Context) => Math.floor((Math.random() + 1) * 10));
shoppingContainer.bind<Product>(SERVICE_IDENTIFIERS.PRODUCT).to(Glasses);
shoppingContainer.bind<Product>(SERVICE_IDENTIFIERS.PRODUCT).to(Keyboard);
shoppingContainer.bind<IOrder>(SERVICE_IDENTIFIERS.ORDER).to(Order);

shoppingContainer
  .bind<string>(SERVICE_IDENTIFIERS.customerAddress)
  .toDynamicValue((context: interfaces.Context) => {
    return chance.address();
  });

shoppingContainer
  .bind<string>(SERVICE_IDENTIFIERS.customerName)
  .toDynamicValue((context: interfaces.Context) => {
    return chance.name();
  });

shoppingContainer.bind<Person>(SERVICE_IDENTIFIERS.CUSTOMER).to(Customer);
export {
  shoppingContainer
};
