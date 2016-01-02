var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

/////////////////////// Middleware for server //////////////////////

app.use(express.static('client'));
//there's a way to do this using app.use but we're using this for now...
var jsonParser = bodyParser.json();


////////////// Opening up port for server to listen on ////////////

app.listen(port,function(){
  console.log("Listening at localhost:" + port);
});

////////////////////////// Set up database connection  //////////////////////////////


//set up connection to database and give the instance of the db a name
mongoose.connect('mongodb://localhost:27017/images');

//set up a new schema for each collection in the database (mongoose's version of a table)
var imageSchema = new mongoose.Schema({
	imgUrl: String,
	tag: String,
	description: String
})

//define a document/model constructor that generates models (which are equivalent to rows)
//in the collection
var Image = mongoose.model('ImageData', imageSchema);


///////////////////////// Request Handlers for server ////////////////////////

app.post('/add', jsonParser, function(req, res) {
	var imageData = {
		imgUrl: req.body.image,
		tag: req.body.tag,
		description: req.body.description
	}
	var sendImage = new Image(imageData);
	sendImage.save(function(error, data){
		if(error) return console.error(error);
		console.log('saved:', data);
		res.end();
	})
});

app.post('/search', jsonParser, function(req, res) {
	console.log("req.body.tag -->", req.body.tag)
	Image.find({tag: req.body.searchTag}, function(err, data){
		if(err) return console.error(err);
		console.log("data -->", data);
		res.json(data);
	})
});






