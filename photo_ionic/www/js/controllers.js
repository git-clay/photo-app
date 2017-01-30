angular.module('photoApp', ['ionic','ngCordova'])
	.controller('DetectCtrl', DetectCtrl)
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)

var face_id,
	attributes,
	position,
	landmarks;

DetectCtrl.$inject = ['$scope','$http']
function DetectCtrl($scope,$http){
$scope.getApi=function(imgURI){

	return $http.get('http://localhost:5000/api/detect',imgURI)
	.then(function(res){
		var info = res.data.face[0]
		face_id= info.face_id //used for landmark
		attributes=info.attribute //(age,gender,glass,pose,race,smiling)
		position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
		console.log(face_id,attributes,position)
	})
}
}

LandmarkCtrl.$inject = ['$scope','$http']
function LandmarkCtrl($scope,$http){
	$scope.getApi = function(imgURI){
	return $http.get('http://localhost:5000/api/landmark',imgURI)
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
}

CameraCtrl.$inject = ['$scope','$cordovaCamera']

function CameraCtrl($scope,$cordovaCamera){
console.log($cordovaCamera)
  document.addEventListener("deviceready", function () {

 $scope.takePicture = function() {
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
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            // DetectCtrl.getApi($scope.imgURI)
            console.log('camera data: ' + angular.toJson(imageData))
            console.log($scope.imgURI)
        }, function(err) {
			console.log(err)
	    });
    }
    })

}




