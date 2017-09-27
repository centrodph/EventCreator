angular.module('showModule', []).controller('showController', [
  '$scope',
  '$http',
  '$routeParams',
  'Event',
  function($scope, $http, $routeParams, Event) {
    $scope.loading = true;
    $scope.eventId = $routeParams.id;
    // GET ALL
    Event.find($scope.eventId)
      .then(function(data) {
        $scope.event = data.data;
        $scope.loading = false;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
]);
