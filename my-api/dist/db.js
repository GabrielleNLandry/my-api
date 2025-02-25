"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg"); // Importing the Pool class from pg
const pool = new pg_1.Pool({
    user: "inventory_rg64_user",
    password: "JxihvUdMUXyc3vfc8xffJ6Amvu9U6TMG",
    host: "dpg-co64rgv109ks73dobcg0-a",
    database: "inventory_rg64",
    port: 5432,
});
exports.default = pool; // Export the pool object as the default export
