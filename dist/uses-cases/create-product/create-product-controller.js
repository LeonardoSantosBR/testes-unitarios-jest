"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// api/uses-cases/create-product/create-product-controller.ts
var create_product_controller_exports = {};
__export(create_product_controller_exports, {
  CreateProductController: () => CreateProductController
});
module.exports = __toCommonJS(create_product_controller_exports);
var CreateProductController = class {
  constructor(createProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }
  handle(request, response) {
    return __async(this, null, function* () {
      try {
        const { name, version, hasUpdate, type, releaseDate } = request.body;
        yield this.createProductUseCase.execute({
          name,
          version,
          hasUpdate,
          type,
          releaseDate
        });
        return response.status(200).send("produto salvo.");
      } catch (error) {
        return response.status(400).json({
          message: error.message || "erro inesperado"
        });
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateProductController
});
