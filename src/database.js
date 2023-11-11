const mysql = require("mysql2");

const pool = mysql.createPool({
    host               : "sportsync.cpirdo7txrb3.eu-west-3.rds.amazonaws.com",
    user               : "admin",
    password           : "Sportsync1234",
    database           : "SportSync",
    waitForConnections : true,
    connectionLimit    : 10,
    maxIdle            : 10,
    idleTimeout        : 60000,
    queueLimit         : 0
}).promise();

console.log("Conexión con la BBDD creada");

module.exports = { pool };