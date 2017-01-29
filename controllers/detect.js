var unirest = require('unirest'),
mashapeKey = process.env.mashapeKey;

function getApi(req,res){
unirest.get("https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F6d%2F84%2F9a%2F6d849a537527cd121e5330c40bec2f6e.png")
.header("X-Mashape-Key", mashapeKey)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  res.send(result.body)
});
}
module.exports={
getApi:getApi
}