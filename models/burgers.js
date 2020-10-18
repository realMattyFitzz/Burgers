const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function (nameCol, devCol, nameVal, devVal, cb) {
        orm.insertOne("burgers", nameCol, devCol, nameVal, devVal, function(res){
            cb(res);
        });
    },
    updateOne: function(devCol, devVal, idCol, idVal, cb) {
        orm.updateOne("burgers", devCol, devVal, idCol, idVal, function(res){
            cb(res);
        });
    }
};

module.exports = burger;