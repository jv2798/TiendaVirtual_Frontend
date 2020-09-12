const mysql = require("mysql");
const { promisify } = require("util");
const { database } = require("./Key");

const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
  if (error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("DATABASE CONNECTION WAS CLOSED");
    }

    if (error.code === "ER_CON_COUNT_ERROR") {
      console.log("DATABASE HAS TO MANY CONNECTIONS");
    }
    if (error.code === "ECONNREFUSED") {
      console.log("DATABASE CONNETCIONS WAS  REFUSED");
    }
  }

  if (connection) {
    connection.release();
    console.log("DB IS CONNECTIONS");
    return;
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
