angular.module('eventModule', []).controller('mainController', [
  '$scope',
  '$http',
  'Event',
  function($scope, $http, Event) {
    $scope.formData = {};
    $scope.loading = true;

    // GET ALL
    Event.get().then(function(data) {
      $scope.events = data.data;
      $scope.loading = false;
    });

    // CREATE
    $scope.createTodo = function() {
      if ($scope.formData.name != undefined) {
        $scope.loading = true;
        Event.create($scope.formData)
          .then(function(data) {
            $scope.loading = false;
            $scope.formData = {};
            $scope.events = data.data;
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    };
  }
]);
