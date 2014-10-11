// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ngResource', 'ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })


    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html",
          controller: 'PageCtrl'
        }
      }
    })

    .state('app.achieve', {
      url: "/achieve",
      views: {
        'menuContent' :{
          templateUrl: "templates/achieve.html",
          controller: 'PageCtrl'
        }
      }
    })

    .state('app.upload', {
      url: "/upload",
      views: {
        'menuContent' :{
          templateUrl: "templates/upload.html",
          controller: 'UploadCtrl'
        }
      }
    })

    .state('app.timeline', {
      url: "/timeline",
      views: {
        'menuContent' :{
          templateUrl: "templates/timeline.html",
          controller: 'TimelineCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/timeline');
})

.constant('ApiEndpoint', 'http://tokyotownname.com/api/v1');

