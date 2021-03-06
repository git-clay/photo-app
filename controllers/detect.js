var unirest = require('unirest'),
mashapeKey = process.env.mashapeKey,
base_url = 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=',
file_image_url = 'https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F6d%2F84%2F9a%2F6d849a537527cd121e5330c40bec2f6e.png';

function getApi(req,res){
	console.log(req)
unirest.get(base_url+"glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url="+file_image_url)
.header("X-Mashape-Key", mashapeKey)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(result.body)
});

}

function postApi(req,res){
	console.log(req.body)
	res.send(req)
}


module.exports={
getApi:getApi,
postApi:postApi
}