import { Product } from "./product.interface"
import { productModel } from "./product.model"


const createOder = async (productInfo: Product) => {
    const result = await productModel.create(productInfo)
    return result;
}
const getAllProducts = async () => {
    const products = await productModel.find();
    return products;
}

const getProductById = async (productId: string) => {
    const product = await productModel.findById(productId);
    return product;
}
export const productService = {
    createOder,
    getAllProducts,
    getProductById
}