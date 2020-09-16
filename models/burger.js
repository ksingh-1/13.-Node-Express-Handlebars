var orm = require("../config/orm.js");
//require object relational mapping
//Calling ORM functions using burger specific input
var burger = {
    //Calls back/renders all the burgers in DB
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    //Inserts one burger to be put into db
    insertOne: function (burger_name, callback) {
        orm.insertOne(burger_name, function (res) {
            callback(res);
        });
    },
    //Updates One burger to be devoured from db
    updateOne: function (burger_id, callback) {
        orm.updateOne(burger_id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;