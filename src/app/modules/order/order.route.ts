import express from "express";
import { OrderControllers } from "./order.controller";

const orderRouter = express.Router();

// router.get("/", OrderControllers.getAllOrders);

orderRouter.post("/", OrderControllers.createOrder);
orderRouter.get('/', OrderControllers.getAllOrders)

export const OrderRoute = orderRouter;