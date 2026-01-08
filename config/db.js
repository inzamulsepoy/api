const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'user',
    database: 'formdb'
});

module.exports = pool.promise(); // Use async/await
