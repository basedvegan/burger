// Set up MySQL connection dependencies 
var mysql = require("mysql");

// Set mysql connection parameters
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  var connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "choco420",
      database: "burgers_db"
      });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
