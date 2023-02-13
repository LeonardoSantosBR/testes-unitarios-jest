"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// api/index.ts
var api_exports = {};
__export(api_exports, {
  app: () => app
});
module.exports = __toCommonJS(api_exports);
var import_express2 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// api/routes/produts-routes.ts
var import_express = require("express");

// api/implementations/mysql/mysql.product.ts
var import_client = require("@prisma/client");
var MySqlImplementation = class {
  findByName(name) {
    return __async(this, null, function* () {
      const prisma = new import_client.PrismaClient();
      try {
        const verifyProduct = yield prisma.appleProduct.findFirst({
          where: {
            name
          }
        });
        return verifyProduct;
      } catch (error) {
        return error;
      }
    });
  }
  saveProduct(product) {
    return __async(this, null, function* () {
      const prisma = new import_client.PrismaClient();
      try {
        yield prisma.appleProduct.create({
          data: {
            id: product.id,
            name: product.name,
            hasUpdate: product.hasUpdate,
            type: product.type,
            version: product.version,
            releaseDate: product.releaseDate
          }
        });
      } catch (error) {
        return error;
      }
    });
  }
};

// api/domain/entities/apple-products.ts
var import_crypto = __toESM(require("crypto"));
var AppleProduct = class {
  constructor(props, id) {
    Object.assign(this, props);
    if (!id) {
      this.id = import_crypto.default.randomUUID();
    }
  }
};

// api/uses-cases/create-product/create-product.usecase.ts
var CreateProductUsecase = class {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  execute(product) {
    return __async(this, null, function* () {
      const productAlreadyExists = yield this.productRepository.findByName(
        product.name
      );
      if (productAlreadyExists == null ? void 0 : productAlreadyExists.name) {
        throw new Error("Produto j\xE1 catalogado");
      }
      const NewProduct = new AppleProduct(product);
      yield this.productRepository.saveProduct(NewProduct);
    });
  }
};

// api/uses-cases/create-product/create-product-controller.ts
var CreateProductController = class {
  constructor(createProductUseCase2) {
    this.createProductUseCase = createProductUseCase2;
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

// api/uses-cases/create-product/index.ts
var mySqlImplementation = new MySqlImplementation();
var createProductUseCase = new CreateProductUsecase(mySqlImplementation);
var createProductController = new CreateProductController(
  createProductUseCase
);

// api/routes/produts-routes.ts
var routerProduct = (0, import_express.Router)();
routerProduct.post("/post/products", (request, response) => {
  return createProductController.handle(request, response);
});

// api/index.ts
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use((0, import_cors.default)());
app.use(routerProduct);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
