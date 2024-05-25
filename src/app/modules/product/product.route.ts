import express from "express"
import { productController } from "./product.controller";
const router = express.Router()


router.post('/create-products', productController.createProductController)
router.get('/', productController.getProducts)
router.get('/:id', productController.getSingleProducts)
router.put("/:id", productController.updateProducts)
router.put("/:id", productController.updateProducts)
router.delete('/:id', productController.deleteProduct);
export default router