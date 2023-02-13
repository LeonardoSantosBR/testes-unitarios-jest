import { Router } from "express";
import { createProductController } from "../uses-cases/create-product";

const routerProduct = Router();

routerProduct.post("/post/products", (request, response) => {
  return createProductController.handle(request, response);
});

export { routerProduct };
