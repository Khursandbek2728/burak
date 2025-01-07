import ProductModel from "../schema/Product.model";
import {
  ProductInput,
  Product,
  ProductUpdateInput,
} from "../libs/types/product";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
  private readonly ProductModel;
  constructor() {
    this.ProductModel = ProductModel;
  }
  // SPA

  // SSR
  public async getAllProducts(): Promise<Product> {
    const result = await this.ProductModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result as unknown as Product;
  }

  public async createNewProduct(input: ProductInput): Promise<Product[]> {
    try {
      console.log("entered createNewProduct");
      const result = await this.ProductModel.create(input);
      console.log("leaving createNewProduct");

      return result as unknown as Product[];
    } catch (err) {
      console.log("ERROR, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    // string => ObjectId
    id = shapeIntoMongooseObjectId(id);
    const result = await this.ProductModel.findByIdAndUpdate(
      { _id: id },
      input,
      { new: true }
    ).exec();

    if (!result) {
      throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    }

    return result as unknown as Product;
  }
}

export default ProductService;
