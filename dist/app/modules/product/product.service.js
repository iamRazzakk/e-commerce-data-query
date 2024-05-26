"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = require("./product.model");
const createOder = (productInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(productInfo);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.productModel.find();
    return products;
});
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.productModel.findById(productId);
    return product;
});
const updateProductSingleValue = (_id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndUpdate(_id, updatedData, {
        new: true,
    });
    return result;
});
const deleteProductById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.productModel.findByIdAndDelete(_id);
});
const productsSearch = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, 'i');
    return yield product_model_1.productModel.find({
        $or: [
            { name: regex },
            { description: regex },
            // { category: regex },
            // { tags: regex }
        ]
    });
});
exports.productService = {
    createOder,
    getAllProducts,
    getProductById,
    updateProductSingleValue,
    deleteProductById,
    productsSearch
};
