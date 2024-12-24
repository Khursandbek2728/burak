import { T } from "../libs/types/common";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";
import {
  Member,
  MemberInput,
  LoginInput,
  AdminRequest,
} from "../libs/types/member";
import Errors, { Message } from "../libs/Errors";

const productService = new ProductService();
const productController: T = {};

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch (err) {
    console.log("Error, getAllProducts:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/signup")</script>`
    );
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
    res.send("done");
  } catch (err) {
    console.log("Error, createNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/signup")</script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
  } catch (err) {
    console.log("Error, updateChosenProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/signup")</script>`
    );
  }
};

export default productController;
