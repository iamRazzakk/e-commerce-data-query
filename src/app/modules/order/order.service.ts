
import { productModel } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (order: Order) => {

    const product = await productModel.findById(order.productId);


    if (!product) {
        throw Error("no product found");
    }

    if (order.quantity > product.inventory.quantity) {
        throw Error("Insufficient quantity available in inventory");
    }

    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();



    const result = await OrderModel.create(order); // create order
    return result;
};
const getAllOrderFromDB = async () => {
    const result = await OrderModel.find();
    if (result.length === 0) {
        throw Error("Order not found");
    }
    return result;
};
const getOrdersByUserEmailDB = async (userEmail: string) => {
    const result = await OrderModel.find({ email: userEmail });
    if (result.length === 0) {
        throw Error("Order not found");
    }
    return result;
};

export const OrderServices = {
    createOrderDB,
    getAllOrderFromDB,
    getOrdersByUserEmailDB
};