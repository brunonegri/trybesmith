import { Request, Response } from 'express';
import UsersServices from '../services/UsersServices';

class UsersController {
  constructor(private usersServices = new UsersServices()) {}

  public createUser = async (req: Request, res: Response) => {
    const token = await this.usersServices.createUser(req.body);
    return res.status(201).json({ token });
  };
}

export default UsersController;