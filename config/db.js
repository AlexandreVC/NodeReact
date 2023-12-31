const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NodeReact',
    password: 'root',
    port: 5432, // ou le port que vous utilisez pour PostgreSQL
});

module.exports = pool;
