"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.productController.createProductController);
router.get('/', product_controller_1.productController.getProducts);
router.get('/:id', product_controller_1.productController.getSingleProducts);
router.put("/:id", product_controller_1.productController.updateProducts);
router.put("/:id", product_controller_1.productController.updateProducts);
router.delete('/:id', product_controller_1.productController.deleteProduct);
// for search
// router.get('/search', productController.productSearch);
exports.default = router;
// /api/products?searchTerm=iphone
