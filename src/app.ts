import express, { Application, Request, Response } from "express"
const app: Application = express()
import cors from "cors"
import router from "./app/modules/product/product.route"
// const port = 5001


// parser
app.use(express.json())
app.use(cors())

app.use('/api/products', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
export default app