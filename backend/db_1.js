const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "10.0.20.71", // host: 'localhost',
  port: 3306,
  user: "root",
  password: "rootpassword",
  database: "myappdb",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
