import { Request, Response } from "express";
import orderItemSchemaJoi from "./order.validation";
import { OrderServices } from "./order.service";


const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        //  creating schema a validation using Joi
        const { error, value } = orderItemSchemaJoi.validate(orderData);
        if (error) {
            return res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error.details,
            });
        }

        const result = await OrderServices.createOrderDB(value);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (err: any) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
};
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const userEmail = req.query.email as string;

        if (userEmail) {
            const result = await OrderServices.getOrdersByUserEmailDB(userEmail);

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        } else {
            const result = await OrderServices.getAllOrderFromDB();

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
        });
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrders
};