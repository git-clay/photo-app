angular.module('photoApp', ['ionic','ngCordova'])
	.controller('DetectCtrl', DetectCtrl)
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)

DetectCtrl.$inject = ['$scope','$http']
function DetectCtrl($scope,$http){
	console.log('DetectCtrl')

$scope.getApi=function(imgURI){

	return $http.get('http://localhost:5000/api/detect',imgURI)
	.then(function(res){

		console.log(res)
	})
}
}

LandmarkCtrl.$inject = ['$scope','$http']
function LandmarkCtrl($scope,$http){
	console.log('LandmarkCtrl')
	$scope.landmark = Landmark.get();
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




