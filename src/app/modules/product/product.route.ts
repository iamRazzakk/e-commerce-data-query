import express from "express"
import { productController } from "./product.controller";
const router = express.Router()


router.post('/', productController.createProductController)
router.get('/', productController.getProducts)
router.get('/:id', productController.getSingleProducts)
router.put("/:id", productController.updateProducts)
router.put("/:id", productController.updateProducts)
router.delete('/:id', productController.deleteProduct);
// for search
// router.get('/search', productController.productSearch);

export default router
// /api/products?searchTerm=iphone