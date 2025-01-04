import mongoose, { Schema, Types } from "mongoose";
import {
  ProductSize,
  ProductVolume,
  ProductStatus,
  ProductCollection,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      require: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },

    productVolume: {
      type: Number,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },

    _id: {
      type: Types.ObjectId,
    },
  },
  { timestamps: true }
);
productSchema.index(
  { productName: 1, ProductSize: 1, ProductVolume: 1 },
  { unique: true }
);

export default mongoose.model("Product", productSchema);
