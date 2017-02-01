angular.module('photoApp.controllers', [])
	.controller('DetectCtrl', DetectCtrl)
	.controller('LandmarkCtrl', LandmarkCtrl)
	.controller('CameraCtrl', CameraCtrl)
	.controller('DeviceCtrl', DeviceCtrl)
	.controller('MenuCtrl', MenuCtrl)
	.controller('CanvasCtrl', CanvasCtrl)
	.controller('Cam2',Cam2)
var face_id,
	attributes,
	position,
	landmarks,
	landmarkArr = []

MenuCtrl.$inject = []

function MenuCtrl() {

}
console.log('controllers')
DeviceCtrl.$inject = ['$scope', '$cordovaDevice', '$ionicPlatform', '$timeout']

function DeviceCtrl($scope, $cordovaDevice, $ionicPlatform, $timeout) {
	// sometimes binding does not work! :/

	$scope.$apply(function () {

		// getting device infor from $cordovaDevice
		var device = $cordovaDevice.getDevice();

		$scope.manufacturer = device.manufacturer;
		$scope.model = device.model;
		$scope.platform = device.platform;
		$scope.uuid = device.uuid;
	})

}

DetectCtrl.$inject = ['$scope', '$http', '$ionicPlatform', '$location']

function DetectCtrl($scope, $http, $ionicPlatform, $location) {
	$ionicPlatform.ready(function () {
		$scope.getApi = function (imgURI) {

			return $http.get('https://shrouded-chamber-14617.herokuapp.com/api/detect', imgURI)
				.then(function (res) {
					var info = res.data.face[0]
					face_id = info.face_id //used for landmark
					attributes = info.attribute //(age,gender,glass,pose,race,smiling)
					position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
					console.log(face_id, attributes, position)
				})
		}
	})
}

LandmarkCtrl.$inject = ['$scope', '$http', '$ionicPlatform', '$location']

function LandmarkCtrl($scope, $http, $ionicPlatform, $location) {
	$ionicPlatform.ready(function () {

		$scope.getApi = function (imgURI) {
				return $http({
						method: 'POST',
						url: 'https://shrouded-chamber-14617.herokuapp.com/api/landmark'
					})
					.then(function (res) {
						console.log(res)
						var info = res.data.face[0]
						face_id = info.face_id //used for landmark
						attributes = info.attribute //(age,gender,glass,pose,race,smiling)
						position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
						console.log(face_id, attributes, position)
					})
			},
			function (err) {
				console.log(err)
			};

	})
}

CameraCtrl.$inject = ['$scope', '$cordovaCamera', '$ionicPlatform', '$cordovaDevice', '$http']

function CameraCtrl($scope, $cordovaCamera, $ionicPlatform, $cordovaDevice, $http) {
	console.log($cordovaCamera)
	console.log(ionic.Platform.platform()) //checks if web or mobile
	window.onload = function () {
		$ionicPlatform.ready(function () {
			$scope.$apply(function () {

				var options = {
					quality: 75,
					destinationType: Camera.DestinationType.DATA_URL,
					sourceType: Camera.PictureSourceType.CAMERA,
					allowEdit: true,
					encodingType: Camera.EncodingType.JPEG,
					targetWidth: 300,
					targetHeight: 300,
					popoverOptions: CameraPopoverOptions,
					saveToPhotoAlbum: false
				};
				$scope.takePicture = function () {
					$cordovaCamera.getPicture(options).then(function (imageData) {
						$scope.imgURI = "data:image/jpeg;base64," + imageData;
						rawdata = "data:image/jpeg;base64," + imageData
						console.log('camera data: ' + angular.toJson(imageData))
						console.log($scope.imgURI)
						$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
						return $http({
								method: 'POST',
								url: 'https://shrouded-chamber-14617.herokuapp.com/api/detect',
								data: rawdata
							})
							.then(function (res) {
								var info = res.data.face[0]
								face_id = info.face_id //used for landmark
								attributes = info.attribute //(age,gender,glass,pose,race,smiling)
								position = info.position //(center,eye_left,eye_right,height,width,mouth_left,mouth_right,nose)
								console.log(face_id, attributes, position)
							})
					}, function (err) {
						console.log(err)
					});
				}
			})
		})
	}
}

Cam2.$inject = ['$scope', '$cordovaCamera', '$ionicPlatform', '$cordovaDevice', '$http','$ionicPopup']

function Cam2($scope, $cordovaCamera, $ionicPlatform, $cordovaDevice, $http,$ionicPopup) {
	// console.log($cordovaCamera)
	console.log(ionic.Platform.platform()) //checks if web or mobile
	window.onload = function () {
		$ionicPlatform.ready(function () {
			$scope.$apply(function () {

				var options = {
					quality: 75,
					destinationType: Camera.DestinationType.DATA_URL,
					sourceType: Camera.PictureSourceType.CAMERA,
					allowEdit: true,
					encodingType: Camera.EncodingType.JPEG,
					targetWidth: 300,
					targetHeight: 300,
					popoverOptions: CameraPopoverOptions,
					saveToPhotoAlbum: false
				};
				$scope.takePicture = function () {
					$cordovaCamera.getPicture(options).then(function (imageData) {
						// console.log('click')
						rawdata = {info:imageData}
					// 	console.log('camera data: ' + angular.toJson(imageData))
					// 	console.log($scope.imgURI)
					// console.log('click')
							$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
							return $http({
								method: 'POST',
								url: 'https://shrouded-chamber-14617.herokuapp.com/api/imgur',
								data: rawdata
							})
						.then(function (res) {
							$scope.imgURI = res
						})
					}, function (err) {
						console.log(err)
					});
				}
			})
		})
	}
}

var counter = 0;
CanvasCtrl.inject = ['$scope']

function CanvasCtrl($scope) {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	$scope.data = [

	];

	$scope.addData = function () {
		var id = 0;
		if ($scope.data.length > 0) {
			id = $scope.data[$scope.data.length - 1].id + 1;
		}
		var p = {
			id: id,
			x: $scope.x,
			y: $scope.y,
			amount: $scope.amount
		};
		$scope.data.push(p);
		$scope.x = '';
		$scope.y = '';
		$scope.amount = '';
		draw($scope.data);
	};

	$scope.removePoint = function (point) {
		console.log(point);
		for (var i = 0; i < $scope.data.length; i++) {
			if ($scope.data[i].id === point.id) {
				console.log("removing item at position: " + i);
				$scope.data.splice(i, 1);
			}
		}

		context.clearRect(0, 0, 400, 400);
		draw($scope.data);
		console.log($scope.data);
	}

	function draw(data) {
		for (var i = 0; i < data.length; i++) {
			drawDot(data[i]);
			if (i > 0) {
				drawLine(data[i], data[i - 1]);
			}
		}
	}

	function drawDot(data) {
		context.beginPath();
		context.arc(data.x, data.y, data.amount, 0, 2 * Math.PI, false);
		context.fillStyle = "#ccddff";
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = "#666666";
		context.stroke();
	}

	function drawLine(data1, data2) {
		context.beginPath();
		context.moveTo(data1.x, data1.y);
		context.lineTo(data2.x, data2.y);
		context.strokeStyle = "black";
		context.stroke();
	}

	// setup
	canvas.width = 600;
	canvas.height = 400;
	context.globalAlpha = 1.0;
	context.beginPath();
	draw($scope.data);
}