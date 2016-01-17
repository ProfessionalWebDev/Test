exports.getDetails = function (req,res){
	console.log("Irecieved a get request");
	
	req.app.schema.detailsdb.find(function(err,docs){
		console.log("refresh: ",docs);
		res.json(docs);
	});
};

exports.getDetails_id = function (req,res){
	var id = req.params.id;
	
	req.app.schema.detailsdb.findOne({_id: id}, function(err , docs){
		res.json(docs);
	});
};

exports.saveDetails = function (req, res) {
	console.log("Hi");
	console.log("this is to save: ",req.body);
	var person = new req.app.schema.detailsdb(req.body);
	person.save(req.body,function(err,docs){
		res.json(docs);
		console.log("docs: ",docs)
	});
};

exports.deleteDetails = function (req, res) {
	var id = req.params.id;
	console.log("i am in delete server: ",id);
	
	req.app.schema.detailsdb.find({_id: id}).remove( function(err , docs){
		res.json(docs);
	});
};

exports.updateDetails = function (req, res) {
	var id = req.params.id
	console.log ("Id: !!!!!!!!",id);
	console.log(req.body.name);
	
	req.app.schema.detailsdb.update({_id: id},
		{$set: {name: req.body.name, desc: req.body.desc}},
	function(err , doc){
		res.json(doc);
	});
};