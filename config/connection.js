var mysql = require('mysql');
//Require MySQL database
//If On Heroku, JAWSDB Is Used
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //Otherwise MySql locally is used
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

connection.connect();

module.exports = connection;