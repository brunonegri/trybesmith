import Product from '../interfaces/product';
import ProductModel from '../models/ProductsModel';
import connection from '../models/connection';

class ProductServices {
  public model: ProductModel;

  constructor() { this.model = new ProductModel(connection); }

  public create = async (req: Product) => {
    const newProduct = await this.model.create(req);
    return newProduct;
  };

  public getAll = async (): Promise<Product[]> => {
    const products = await this.model.getAll();
    return products;
  };
}

export default ProductServices;