	var mysql = require("mysql");

	var connection;

	if(process.env.JAWSDB_URL){
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	} else {
		host: "localhost",
		port: 3306,

		// Your username
		user: "root",

		// Your password
		password: "",
		database: "burgers_db"
	}


	connection.connect(function(err) {
	  if (err) throw err;
	  console.log("connected as id " + connection.threadId);
	  connection.end();
	});

module.exports = connection;
