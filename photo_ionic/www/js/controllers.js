angular.module('photoApp', ['ionic','ngCordova'])
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)

LandmarkCtrl.$inject = ['$scope','Landmark']
function LandmarkCtrl(scope,Landmark){
	console.log('LandmarkCtrl')
	$scope.landmark = Landmark.get();
}

CameraCtrl.$inject = ['$scope','$cordovaCamera']
function CameraCtrl($scope,$cordovaCamera){
	$scope.pictureUrl = "http://placehold.it/300x300"

	$scope.takePicture =function(){
		console.log($cordovaCamera)
		$cordovaCamera.getPicture({})
		.then(function(data){
			console.log('camera data: '+angular.toJson(data))
		}), function(err){
			console.log('camera error: '+angular.toJson(err))

		}
	}

}