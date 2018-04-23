// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function QuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function devouredVal(YorN) {
 
  var arr = [];

  for (var didIEatIt in YorN) {
    console.log('*****************')
    console.log(didIEatIt)
    console.log('***------------****')
    console.log(YorN)
    console.log('*****************')

    var test = arr.push(didIEatIt + "=" + YorN[didIEatIt]);

    console.log('-----------')
    console.log(test)
    console.log('-----------')
  }

  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += QuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(table, ColumnVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += devouredVal(ColumnVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
