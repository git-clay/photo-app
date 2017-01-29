angular.module('photoApp', [])
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)

LandmarkCtrl.$inject = ['$scope','Landmark']
function LandmarkCtrl(scope,Landmark){
	$scope.landmark = Landmark.get();
}

CameraCtrl.$inject = ['$scope','$cordovaCameraProvider']
function CameraCtrl(scope,$cordovaCameraProvider){
	$scope.pictureUrl = "http://placehold.it/300x300"

	$scope.takePicture =function(){
		$cordovaCamera.getPicture({})
		.then(function(data){
			console.log('camera data: '+angular.toJson(data))
		}), function(err){
			console.log('camera error: '+angular.toJson(err))

		}
	}

}