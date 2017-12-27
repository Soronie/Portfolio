var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
var recommendations = require("./models/recommendations");

// Allow access to static content for the app from the current directory 
app.use(express.static(__dirname));
app.set("view engine", "ejs");

// Send the main application embedded JS page with recommendations and minimum content length
app.get('*', function(req, res){
	res.render("index", {minLength: 250, recommendations: recommendations});
});

// Start server
app.listen(port, function(err){
	if(err) {
		console.log(err);
	} else {
		console.log("Connected to server.");
	}
});