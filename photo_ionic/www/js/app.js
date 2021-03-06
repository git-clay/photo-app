// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('photoApp', ['ionic','photoApp.controllers','ngCordova','ui.router'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('app',{
  url:'/app',
  abstract:true,
  templateUrl:'../templates/menu.html',
  controller:'MenuCtrl'
})
// .state('app.home',{
//   url:'/',
//   views:{
//     'menuContent':{
//         templateUrl:'../index.html',
//         controller: 'HomeCtrl'
//     }
//   }
// })
.state('app.device',{
  url:'/device',
    views:{
    'menuContent':{
  templateUrl:'../templates/device.html',
  controller:'DeviceCtrl'
    }
  }
})
.state('app.camera',{
  url:'/camera',
    views:{
    'menuContent':{
  templateUrl:'../templates/camera.html',
  controller:'CameraCtrl'
    }
  }
})
.state('app.landmark',{
  url:"/landmark",
    views:{
    'menuContent':{
      templateUrl: "../templates/landmark.html",
      controller: 'LandmarkCtrl'      
    }
  }
})
.state('app.result',{
  url:'/result',
  views:{
    'menuContent':{
      templateUrl: "../templates/result.html",
      controller: 'CanvasCtrl'
    }
  }
})  
    $urlRouterProvider.otherwise('/app/camera');
})
// .factory('Landmark', function($resource){
//     return $resource('http://localhost:5000/api/landmark')
//   })

// .config(['$ionicConfigProvider', function($ionicConfigProvider) {
//     $ionicConfigProvider.tabs.position('bottom');
// }])




