const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "blogapp",
    password: process.env.databasePassword,
    port: process.env.databasePort
});

module.exports = pool;