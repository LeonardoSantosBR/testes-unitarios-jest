import { Request, Response } from "express";
import { CreateProductUsecase } from "./create-product.usecase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUsecase) {}
  async handle(request: Request, response: Response) {
    try {
      const { name, version, hasUpdate, type, releaseDate } = request.body;

      await this.createProductUseCase.execute({
        name,
        version,
        hasUpdate,
        type,
        releaseDate,
      });
      return response.status(200).send("produto salvo.");
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "erro inesperado",
      });
    }
  }
}
