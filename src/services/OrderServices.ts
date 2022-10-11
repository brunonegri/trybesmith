import OrdersModel from '../models/OrdersModel';
import connection from '../models/connection';

class UsersServices {
  public model: OrdersModel;

  constructor() { this.model = new OrdersModel(connection); }

  public getAll = async () => {
    const orders = await this.model.getAll();
    return orders;
  };
}

export default UsersServices;