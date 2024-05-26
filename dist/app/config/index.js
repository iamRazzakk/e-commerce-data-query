"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL;
exports.default = {
    port, database_url
};
