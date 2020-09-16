// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//Router for adding/eating burgers.
var router = require('./controllers/burgers_controller');
app.use('/', router);
//Process.env.Port for Heroku Deployment
app.set("port", (process.env.PORT || 2018));
//App listening on port number 2001
app.listen(app.get("port"), function () {
    console.log("You are running on port", app.get("port"));
});