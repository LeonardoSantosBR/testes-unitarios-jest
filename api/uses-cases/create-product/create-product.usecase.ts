import AppleProduct from "../../domain/entities/apple-products";
import { iCreateProductRepository } from "../../repositories/create-product/iCreate-product";
import { productDTO } from "./create-product-dto";

export class CreateProductUsecase {
  constructor(private readonly productRepository: iCreateProductRepository) {}

  async execute(product: productDTO) {
    try {
      const productAlreadyExists = await this.productRepository.findByName(
        product.name
      );

      if (productAlreadyExists?.name) {
        throw new Error("Produto já catalogado");
      }

      const NewProduct = new AppleProduct(product);
      await this.productRepository.saveProduct(NewProduct);
    } catch (error) {
      return error;
    }
  }
}
