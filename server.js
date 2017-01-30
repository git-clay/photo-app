var express			= require('express'),
	bodyParser		= require('body-parser'),
	app				= express(),
	db				= require('./db/models'),
	methodOverride 	= require('method-override');
	
require('dotenv').load();
// console.log(process.env)
// serve static files from public folder

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))
// app.use(express.static('public'));




/*********************** ROUTES ******************************/
var routes = require('./routes/routes.js');
app.use(routes);



/*********************** VIEWS ******************************/
app.use(express.static(__dirname + '/photo_ionic/www'));
// app.set('views', '/views');
// app.all('/*', function(req, res) { // one page app -- angular appends to index.html using ui-view
//    res.sendFile(__dirname + '/www/index.html');
// });
app.get('/landmark', function(req,res){
  res.sendFile(__dirname+'/photo_ionic/www/templates/landmark.html')
})
// listen on port 5000
app.listen(process.env.PORT || 5000, function () {
  console.log('Express server is alive at port 5000');
});