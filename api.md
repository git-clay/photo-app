# POST image file >> returns (orientation,x,y,w,h,{eyes},{nose},{mouth})
response = Unirest.post "https://apicloud-facerect.p.mashape.com/process-file.json",
  headers:{
    "X-Mashape-Key" => "VfvIJvGNDzmshsroRb4RV1I9UgFUp1PvDXNjsnGD81TZvXJlx7"
  },
  parameters:{
    "features" => true,
    "image" => File.new("face.jpg")
  }
# GET image url
response = Unirest.get "https://apicloud-facerect.p.mashape.com/process-url.json?url=http%3A%2F%2Fapicloud.me%2Fassets%2Ffacerect%2Fimage1.jpg",
  headers:{
    "X-Mashape-Key" => "VfvIJvGNDzmshsroRb4RV1I9UgFUp1PvDXNjsnGD81TZvXJlx7",
    "Accept" => "application/json"
  }  



# ****
# GET face detections >> (age,gender,race,smile,pitch,roll,yaw,Position:center,eye:l/r,mouth:l/r,nose)
response = Unirest.get "https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F6d%2F84%2F9a%2F6d849a537527cd121e5330c40bec2f6e.png",
  headers:{
    "X-Mashape-Key" => "VfvIJvGNDzmshsroRb4RV1I9UgFUp1PvDXNjsnGD81TZvXJlx7",
    "Accept" => "application/json"
  }
# ******
# GET face landmark >> contour(chin,left1-9,right1-9,eye bottom/center/pupil/corners,eyebrows,lips,nose)
response = Unirest.get "https://faceplusplus-faceplusplus.p.mashape.com/detection/landmark?face_id=1d1c3158b15dc2c9f12b6352d2616769&type=83p",
  headers:{
    "X-Mashape-Key" => "VfvIJvGNDzmshsroRb4RV1I9UgFUp1PvDXNjsnGD81TZvXJlx7",
    "Accept" => "application/json"
  }


# Kairos Face Detection useful for comparing within a db gallery