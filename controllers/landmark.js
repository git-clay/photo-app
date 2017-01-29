var unirest = require('unirest'),

mashapeKey = process.env.mashapeKey;

function getApi(req,res){
unirest.get("https://faceplusplus-faceplusplus.p.mashape.com/detection/landmark?face_id=1d1c3158b15dc2c9f12b6352d2616769&type=83p")
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


