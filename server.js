var express		= require('express'),
	bodyParser	= require('body-parser'),
	app			= express(),
	db			= require('./db/models');
	
require('dotenv').load();
// console.log(process.env)
// serve static files from public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.static('public'));




/*********************** ROUTES ******************************/
var routes = require('./routes/routes.js');
app.use(routes);



/*********************** VIEWS ******************************/
app.use(express.static(__dirname + '/public'));
app.set('views', '/views');
app.all('/*', function(req, res) { // one page app -- angular appends to index.html using ui-view
   res.sendFile(__dirname + '/public/views/index.html');
});

// listen on port 5000
app.listen(process.env.PORT || 5000, function () {
  console.log('Express server is alive at port 5000');
});