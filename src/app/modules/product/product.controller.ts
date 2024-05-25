import { Request, Response } from "express";
import { productService } from "./product.service";
import { productModel } from "./product.model";

const createProductController = async (req: Request, res: Response) => {
    try {
        const productInfo = req.body
        console.log(productInfo)
        const result = await productService.createOder(productInfo)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}
const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: products
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getSingleProducts = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: product
        });
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const updateProducts = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const updateProductInfo = req.body;
        const updatedProduct = await productService.updateProductSingleValue(productId, updateProductInfo);
        console.log(productId, updateProductInfo)
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct
        });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ message: "Can't update" })
    }
}
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        // console.log(productId);

        const result = await productService.deleteProductById(productId);

        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const productController = {
    createProductController,
    getProducts,
    getSingleProducts,
    updateProducts,
    deleteProduct
}