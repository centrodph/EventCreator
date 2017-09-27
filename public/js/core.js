angular
  .module('app', ['eventModule', 'showModule', 'eventService', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .when('/event/:id', {
        templateUrl: 'views/event.html',
        controller: 'showController'
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'mainController'
      });
  });
