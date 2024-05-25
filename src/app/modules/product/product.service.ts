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
const updateProductSingleValue = async (_id: string, updatedData: Product) => {
    const result = await productModel.findByIdAndUpdate(_id, updatedData, {
        new: true,
    });
    return result;
};

const deleteProductById = async (_id: string) => {
    return await productModel.findByIdAndDelete(_id);
}
export const productService = {
    createOder,
    getAllProducts,
    getProductById,
    updateProductSingleValue,
    deleteProductById
}