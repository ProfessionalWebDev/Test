exports = module.exports= function (app,mongoose){
	console.log("Inside Model.js");
	require('./schema/details_schema') (app, mongoose);
};