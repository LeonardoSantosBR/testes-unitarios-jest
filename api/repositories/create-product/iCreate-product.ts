import AppleProduct from "../../domain/entities/apple-products";

export interface iCreateProductRepository {
  findByName(name: string): Promise<any>;
  saveProduct(NewProduct: AppleProduct): Promise<any>;
}
