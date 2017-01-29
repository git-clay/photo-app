var unirest = require('unirest'),
mashapeKey = process.env.mashapeKey,
base_url = 'https://faceplusplus-faceplusplus.p.mashape.com/detection/landmark?face_id=',
face_id='a1e463df6f54932abc7a424d6f7a5bd1'; //this comes from api/detect



function getLandmark(req,res){
unirest.get(base_url+face_id)
.header("X-Mashape-Key", mashapeKey)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
    res.send(result)
});
}

module.exports={
getLandmark:getLandmark
}