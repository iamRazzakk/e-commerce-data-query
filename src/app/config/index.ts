import "dotenv/config";
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL
export default {
    port, database_url
}