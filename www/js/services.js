angular.module('starter.services', [])

.factory('Achieve', function(ApiEndpoint, $resource) {
    return $resource(ApiEndpoint + "/archive");
})

.factory('Photo', function(ApiEndpoint, $resource) {
    return $resource(ApiEndpoint + "/photos");
});
