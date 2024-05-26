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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productInfo = req.body;
        console.log(productInfo);
        const result = yield product_service_1.productService.createOder(productInfo);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        // console.log(searchTerm)
        if (searchTerm) {
            const products = yield product_service_1.productService.productsSearch(searchTerm);
            res.status(200).json({
                success: true,
                // message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: products
            });
            if (!searchTerm) {
                return res
                    .status(400)
                    .json({ success: false, message: "Search term is required" });
            }
        }
        else {
            const products = yield product_service_1.productService.getAllProducts();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: products
            });
        }
    }
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
const getSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const product = yield product_service_1.productService.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: product
        });
    }
    catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const updateProductInfo = req.body;
        const updatedProduct = yield product_service_1.productService.updateProductSingleValue(productId, updateProductInfo);
        console.log(productId, updateProductInfo);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct
        });
    }
    catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ message: "Can't update" });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        // console.log(productId);
        const result = yield product_service_1.productService.deleteProductById(productId);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// search
// const productSearch = async (req: Request, res: Response) => {
//     try {
//     } catch (error) {
//         console.error("Error deleting product:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }
exports.productController = {
    createProductController,
    getProducts,
    getSingleProducts,
    updateProducts,
    deleteProduct,
    // productSearch
};
