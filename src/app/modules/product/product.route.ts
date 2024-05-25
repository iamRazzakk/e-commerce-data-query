import express from "express"
import { productController } from "./product.controller";
const router = express.Router()


router.post('/create-products', productController.createProductController)
router.post('/', productController.createProductController)
router.post('/:id', productController.createProductController)
export default router