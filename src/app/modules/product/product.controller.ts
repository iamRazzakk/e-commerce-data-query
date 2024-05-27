import { Request, Response } from "express";
import { productService } from "./product.service";
import productSchemaJoi from "./product.validation";

const createProductController = async (req: Request, res: Response) => {
    try {
        const productInfo = req.body
        console.log(productInfo)

        //  creating schema a validation using Joi
        const { error, value } = productSchemaJoi.validate(productInfo);

        if (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error.details,
            });
        }
        const result = await productService.createOder(value);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error)
    }
}

const getProducts = async (req: Request, res: Response) => {
    try {

        const searchTerm = req.query.searchTerm as string;
        // console.log(searchTerm)
        if (searchTerm) {
            const products = await productService.productsSearch(searchTerm)
            if (!products.length) {
                res.status(500).json({
                    success: false,
                    message: "Data not found",
                });
            }
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: products
            });
            if (!searchTerm) {
                return res
                    .status(400)
                    .json({ success: false, message: "Search term is required" });
            }
        } else {
            const products = await productService.getAllProducts();
            console.log(products, "Product length")
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: products
            });
        }




    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Products not found" });
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
        res.status(500).json({
            success: false,
            message: "Product Not match!",
        });
    }
}
const updateProducts = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const updateProductInfo = req.body;


        const { error, value } = productSchemaJoi.validate(updateProductInfo);

        if (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error.details,
            });
        }

        const updatedProduct = await productService.updateProductSingleValue(productId, value);
        console.log(productId, updateProductInfo)
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Product not update",
        })
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
    deleteProduct,
}