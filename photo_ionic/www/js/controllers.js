angular.module('photoApp.controllers', [])
	.controller('DetectCtrl', DetectCtrl)
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)
	.controller('DeviceCtrl', DeviceCtrl)
	.controller('MenuCtrl', MenuCtrl)

var face_id,
	attributes,
	position,
	landmarks;

MenuCtrl.$inject=[]
function MenuCtrl(){

}
console.log('controllers')
DeviceCtrl.$inject = ['$scope','$cordovaDevice','$ionicPlatform','$timeout']
function DeviceCtrl($scope,$cordovaDevice,$ionicPlatform,$timeout){
            // sometimes binding does not work! :/

        $scope.$apply(function() {


       // getting device infor from $cordovaDevice
            var device = $cordovaDevice.getDevice();
 
            $scope.manufacturer = device.manufacturer;
            $scope.model = device.model;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
     })
 
    }

DetectCtrl.$inject = ['$scope','$http','$ionicPlatform','$location']
function DetectCtrl($scope,$http,$ionicPlatform,$location){
	$ionicPlatform.ready(function(){
$scope.getApi=function(imgURI){

	return $http.get('https://shrouded-chamber-14617.herokuapp.com/api/detect',imgURI)
	.then(function(res){
		var info = res.data.face[0]
		face_id= info.face_id //used for landmark
		attributes=info.attribute //(age,gender,glass,pose,race,smiling)
		position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
		console.log(face_id,attributes,position)
	})
}
})
}

LandmarkCtrl.$inject = ['$scope','$http','$ionicPlatform','$location']
function LandmarkCtrl($scope,$http,$ionicPlatform,$location){
        $ionicPlatform.ready(function(){

	$scope.getApi = function(imgURI){
	return $http.get('https://shrouded-chamber-14617.herokuapp.com/api/landmark',imgURI)
	.then(function(res){
		// var info = res.data.face[0]
		// face_id= info.face_id //used for landmark
		// attributes=info.attribute //(age,gender,glass,pose,race,smiling)
		// position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
		var info = res.data.result[0]
		face_id = info.face_id
		landmarks = info.landmark //all
		var landmarkArr =[]
		console.log(landmarks) //83 items
	})
}
	})
}

CameraCtrl.$inject = ['$scope','$cordovaCamera','$ionicPlatform','$cordovaDevice','$http']

function CameraCtrl($scope,$cordovaCamera,$ionicPlatform,$cordovaDevice,$http){
console.log($cordovaCamera)
console.log(ionic.Platform.platform()) //checks if web or mobile
	window.onload = function(){
	$ionicPlatform.ready(function(){
        $scope.$apply(function() {

     var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 $scope.takePicture = function() {
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            rawdata = imageData
            console.log('camera data: ' + angular.toJson(imageData))
            console.log($scope.imgURI)

    return $http({
    	method: 'POST',
    	url: 'https://shrouded-chamber-14617.herokuapp.com/api/detect',
    	data: Object.toparams(rawdata),
    	headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    }) 

	.then(function(res){
		var info = res.data.face[0]
		var face_id= info.face_id //used for landmark
		var attributes=info.attribute //(age,gender,glass,pose,race,smiling)
		var position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
		console.log(face_id,attributes,position)
	})
        }, function(err) {
			console.log(err)
	    });
    }
    })
    })
	    }
}







