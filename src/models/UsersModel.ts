import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(req: User): Promise<number> {
    const { username, classe, level, password } = req;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES (?,?,?,?)`, [username, classe, level, password]);
    return insertId;
  }
}

export default UsersModel;