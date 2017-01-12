const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const router = require('../routes');
const db = require('../models');
const Sequelize = require('sequelize');
const session = require('express-session');



app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));

//using session middleware

app.use(session({
  secret: 'Keyboard Kat',
  resave: true,
  saveUninitialized: true
}));

app.use("/api", router)
app.use('/login', require('../login-route'));
app.use('/auth', require('../auth-route'));



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../front/views/index.html'));
});

//connect database to server
db.sequelizeConnection.sync().then(function() {
	console.log("Listening on port 3000");
  app.listen(3000);
});



//

module.exports = app;