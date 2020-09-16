var connection = require("./connection.js");
//Connected and Using Object Relational Mapping
var orm = {

    //Setting up 'selectAll()' method to callback older burgers
    selectAll: function (callback) {

        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    //Setting up 'insertOne()' method to put in new burgers
    insertOne: function (burger_name, callback) {

        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    //Update Function to Update Burger ID As It Gets Eaten
    updateOne: function (burgerID, callback) {

        // Run MySQL Query
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;