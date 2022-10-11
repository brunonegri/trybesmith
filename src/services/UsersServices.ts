import UsersModel from '../models/UsersModel';
import connection from '../models/connection';
import { generateToken } from '../utils/JWT';
import User from '../interfaces/user';

class UsersServices {
  public model: UsersModel;

  constructor() { this.model = new UsersModel(connection); }

  public createUser = async (req: User) => {
    const userId = await this.model.createUser(req);

    const token = generateToken({ id: userId, ...req });
    return token;
  };
}

export default UsersServices;