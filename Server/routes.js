module.exports = function (app){
	console.log("Inside Routes");
	
	app.get('/details', require('./details/details').getDetails);	
	app.get('/details/:id', require('./details/details').getDetails_id);
	app.post('/details', require('./details/details').saveDetails);
	app.delete('/details/:id',require('./details/details').deleteDetails);
	app.post('/details/:id',require('./details/details').updateDetails);
};
