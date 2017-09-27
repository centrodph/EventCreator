angular.module('eventService', []).factory('Event', [
  '$http',
  function($http) {
    return {
      find: function(id) {
        return $http.get('/api/event/' + id);
      },
      get: function() {
        return $http.get('/api/event');
      },
      create: function(data) {
        return $http.post('/api/event', data);
      }
    };
  }
]);
