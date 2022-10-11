import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (req: Product): Promise<Product> => {
    const { name, amount } = req;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name,amount) VALUES (?,?)`, [name, amount]);
    return { id: insertId, ...req };
  };

  public getAll = async (): Promise<Product[]> => {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as Product[];
  };
}

export default ProductModel;