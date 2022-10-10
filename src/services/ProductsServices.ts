import Product from '../interfaces/product';
import ProductModel from '../models/ProductsModel';
import connection from '../models/connection';

class ProductServices {
  public model: ProductModel;

  constructor() { this.model = new ProductModel(connection); }

  public async create(req: Product) {
    const newProduct = await this.model.create(req);
    return newProduct;
  }
}

export default ProductServices;