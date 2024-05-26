"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const orderRouter = express_1.default.Router();
// router.get("/", OrderControllers.getAllOrders);
orderRouter.post("/", order_controller_1.OrderControllers.createOrder);
orderRouter.get('/', order_controller_1.OrderControllers.getAllOrders);
exports.OrderRoute = orderRouter;
