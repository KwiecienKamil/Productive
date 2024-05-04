const mysql = require("mysql");

const db = mysql.createConnection({
  host: "mydb.123456789012.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "kamil0204",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to Mysql database", err);
  } else {
    console.log("Connected to Mysql Database");
  }
});

module.exports = db;
