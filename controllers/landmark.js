var unirest = require('unirest'),
mashapeKey = process.env.mashapeKey,
base_url = 'https://faceplusplus-faceplusplus.p.mashape.com/detection/landmark?face_id=',
face_id,//this comes from api/detect 'a1e463df6f54932abc7a424d6f7a5bd1',
file_image_url ;

function getApi(req,res){
	console.log(req)
unirest.get(base_url+"glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url="+file_image_url)
.header("X-Mashape-Key", mashapeKey)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  res.header("Access-Control-Allow-Origin", "*");
  console.log(result.body)
  face_id=result.body;
  // getLandmark(face_id)
});

}


function getLandmark(req,res,faceid){
unirest.get(base_url+face_id)
.header("X-Mashape-Key", mashapeKey)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result.body)
});
}

module.exports={
getLandmark:getLandmark
}