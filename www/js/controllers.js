angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('PageCtrl', function($scope, Achieve) {
    $scope.initAchieve = initAchieve;

    function initAchieve() {
        Achieve.get(
            function(res) {
                $scope.wards = res.wards;
            },
            function(err) {
                console.log("trouble");
            }
        );
    }
})

.controller('UploadCtrl', function($scope, $cordovaDialogs, $cordovaCamera) {
    $scope.dialogTest = function () {
      $cordovaDialogs.alert('Wow!');
    };

    $scope.getPictureFromPhotoLibrary = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ' + message);
      });
    };

    $scope.takePicture = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ' + message);
      });
    };
})

.controller('TimelineCtrl', function($scope, Photo) {
    var page = 1;
    Photo.get(
        function(res) {
            $scope.photos = res.photos
            page += 1;
        },
        function(err) {
            console.log("trouble");
        }
    );
    $scope.nextPage = function() {
        Photo.get(
            { page: page },
            function(res) {
                for (var i=0; i < res.photos.length; i++) {
                    $scope.photos.push(res.photos[i]);
                }
                page += 1;
            },
            function(err) {
                console.log("trouble");
            }
        );
    }
});
