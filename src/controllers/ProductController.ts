import { Request, Response } from 'express';
import ProductsServices from '../services/ProductsServices';

class ProductController {
  constructor(private productsService = new ProductsServices()) {}

  public create = async (req: Request, res: Response) => {
    const newProduct = await this.productsService.create(req.body);
    return res.status(201).json(newProduct);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    return res.status(200).json(products);
  };
}

export default ProductController;