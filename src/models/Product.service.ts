import ProductModel from "../schema/Product.model";
import {
  ProductInput,
  Product,
  ProductUpdateInput,
  ProductInquiry,
} from "../libs/types/product";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";

class ProductService {
  private readonly ProductModel;
  constructor() {
    this.ProductModel = ProductModel;
  }
  // SPA

  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = { ProductStatus: ProductStatus.PROCESS };

    if (inquiry.productCollection)
      match.productCollection = inquiry.productCollection;
    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };

    const result = await this.ProductModel.aggregate([
      { $match: match },
      { $sort: sort },
      { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
      { $limit: inquiry.limit * 1 },
    ]).exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

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
