//implementations to usecase
import { MySqlImplementation } from "../../implementations/mysql/mysql.product";
//usecase
import { CreateProductUsecase } from "./create-product.usecase";
//controller
import { CreateProductController } from "./create-product-controller";

const mySqlImplementation = new MySqlImplementation();

const createProductUseCase = new CreateProductUsecase(mySqlImplementation);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController, createProductUseCase };
