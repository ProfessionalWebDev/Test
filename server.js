var express = require('express');
var app = express();

//var mongojs = require('mongojs'); Hello
//var db = mongojs('detailsdb',['detailsCollection']);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/details');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var detailsSchema = mongoose.Schema({
	_id: {type: Number, default:Math.floor(Math.random() * 90000) + 10000},
    name: String,
	desc: String
	},{_id: false});

var detailsdb = mongoose.model('detailsdb', detailsSchema);

var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/details',function(req,res){
	console.log("Irecieved a get request");
	
	
	detailsdb.find(function(err,docs){
		console.log("refresh: ",docs);
		res.json(docs);
	});
	
});

app.get('/details/:id', function(req,res){
	var id = req.params.id;
	
	detailsdb.findOne({_id: id}, function(err , docs){
		res.json(docs);
	});
})

app.post('/details',function(req,res){
	console.log("this is to save: ",req.body);
	var person = new detailsdb(req.body);
	person.save(req.body,function(err,docs){
		res.json(docs);
		console.log("docs: ",docs)
	});
	
});

app.delete('/details/:id', function(req,res){
	var id = req.params.id;
	console.log("i am in delete server: ",id);
	
	detailsdb.find({_id: id}).remove( function(err , docs){
		res.json(docs);
	});
});

app.post('/details/:id', function(req,res){
	var id = req.params.id;
	console.log(req.name);
	
	detailsdb.update({_id: id},
		{$set: {name: req.body.name, desc: req.body.desc}},
	function(err , doc){
		res.json(doc);
	});

});

app.listen(3000);
console.log("server running on port 3000");