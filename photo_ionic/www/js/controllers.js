angular.module('photoApp', ['ionic','ngCordova'])
	.controller('DetectCtrl', DetectCtrl)
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)

DetectCtrl.$inject = ['$scope','$http']
function DetectCtrl($scope,$http){
	console.log('DetectCtrl')

$scope.getApi=function(){

	return $http.get('/api/detect')
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