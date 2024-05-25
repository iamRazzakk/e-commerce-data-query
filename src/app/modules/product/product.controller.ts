import { Request, Response } from "express";
import { productService } from "./product.service";

const createProductController = async (req: Request, res: Response) => {
    try {
        const productInfo = req.body
        console.log(productInfo)
        const result = await productService.createOder(productInfo)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getProductByIdController = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const productController = {
    createProductController,
    getProducts,

}