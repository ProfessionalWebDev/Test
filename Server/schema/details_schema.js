exports=module.exports = function (app, mongoose) {
	console.log("Inside details schema");
	var detailsSchema = mongoose.Schema({
		name: String,
		desc: String
	});
	var detailsdb = mongoose.model('detailsdb', detailsSchema);
		detailsSchema.plugin(autoIncrement.plugin, 'detailsdb');
		
		app.schema.detailsdb = detailsdb;
};





