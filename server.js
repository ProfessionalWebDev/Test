var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('detailsdb',['detailsCollection']);

var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/details',function(req,res){
	console.log("Irecieved a get request");
	
	
	db.detailsCollection.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
	
});

app.get('/details/:id', function(req,res){
	var id = req.params.id;
	
	db.detailsCollection.findOne({_id: mongojs.ObjectId(id)}, function(err , docs){
		res.json(docs);
	});
})

app.post('/details',function(req,res){
	console.log("this is to save: ",req.body);
	
	db.detailsCollection.insert(req.body,function(err,docs){
		res.json(docs);
		console.log("docs: ",docs)
	});
	
});

app.delete('/details/:id', function(req,res){
	var id = req.params.id;
	console.log("i am in delete server: ",id);
	
	db.detailsCollection.remove({_id: mongojs.ObjectId(id)}, function(err , docs){
		res.json(docs);
	});
});

app.put('/details/:id', function(req,res){
	var id = req.params.id;
	console.log(req.name);
	
	db.detailsCollection.findAndModify({query:{_id: mongojs.ObjectId(id)},
		update:{$set: {name: req.body.name, desc: req.body.desc}},
	new: true},function(err , doc){
		res.json(doc);
	});

});
app.listen(3000);
console.log("server running on port 3000");