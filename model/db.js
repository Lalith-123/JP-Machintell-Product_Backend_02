var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Lalith",
  password: "Lucky@123",
  database: "machintell"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;