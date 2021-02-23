const mysql=require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "root",
    user: "root",
    database: "autonoleggio",
    host:"localhost",
    port: "3306"

});
module.exports = pool.promise();