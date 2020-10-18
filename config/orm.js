const connection = require("./connection.js");
const e = require("express");

const orm = {
  selectAll: function (table, cb) {
    const query = "SELECT * FROM ??";
    connection.query(query, table, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (table, nameCol, devCol, nameVal, devVal, cb) {
    const query = "INSERT INTO ?? (??,??) VALUES (?,?)";
    connection.query(
      query,
      [table, nameCol, devCol, nameVal, devVal],
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  },
  updateOne: function (table, devCol, devVal, idCol, idVal, cb) {
    const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(
        query,
        [table, devCol, devVal, idCol, idVal],
        function (err, res) {
            if (err) throw err;
            cb(res)
        }
    )
  },
};

module.exports = orm;
