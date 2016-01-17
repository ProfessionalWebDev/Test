var express = require('express');
var path = require('path');
var app = express();
var config = require('./config');


//var mongojs = require('mongojs'); 
//var db = mongojs('detailsdb',['detailsCollection']);
var mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
app.schema= {};

var connection = mongoose.connect(config.MONGO_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
autoIncrement.initialize(db)
require('./model')(app, mongoose);
var routes = require('./routes')(app);

var bodyParser = require('body-parser');


app.use(express.static(path.join(process.cwd(),"/../Client")));
//app.use(express.static(path.join(__dirname,"/../Client")));
app.use(bodyParser.json());


app.listen(3000);
console.log("server running on port 3000");