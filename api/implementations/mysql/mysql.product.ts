import AppleProduct from "../../domain/entities/apple-products";
import { PrismaClient } from "@prisma/client";
import { iCreateProductRepository } from "../../repositories/create-product/iCreate-product";

export class MySqlImplementation implements iCreateProductRepository {
  async findByName(name: string): Promise<any> {
    const prisma = new PrismaClient();
    try {
      const verifyProduct = await prisma.appleProduct.findFirst({
        where: {
          name: name,
        },
      });
      return verifyProduct;
    } catch (error) {
      return error;
    }
  }
  async saveProduct(product: AppleProduct) {
    const prisma = new PrismaClient();
    try {
      await prisma.appleProduct.create({
        data: {
          id: product.id,
          name: product.name,
          hasUpdate: product.hasUpdate,
          type: product.type,
          version: product.version,
          releaseDate: product.releaseDate,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
