import express, { Application, Request, Response } from "express"
const app: Application = express()
import cors from "cors"
import router from "./app/modules/product/product.route"
import { OrderRoute } from "./app/modules/order/order.route"
// const port = 5001


// parser
app.use(express.json())
app.use(cors())

app.use('/api/products', router)
//api for orders
app.use("/api/orders", OrderRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running')
})

app.all("/*", (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
export default app