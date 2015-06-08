angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ItensCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log('Fetching data...');

  $scope.itens = [];
  $http.get('https://doutrina.herokuapp.com/itens').
  success(function(data, status, headers, config) {
      console.log(data);
      $scope.itens = data;
    }).
    error(function(data, status, headers, config) {
      console.error(data);
    });

})

.controller('ItensDetailCtrl', function($scope, $stateParams, $http) {
  $http.get('https://doutrina.herokuapp.com/itens').
  success(function(data, status, headers, config) {
      $scope.item = data.filter(function(x){ return x.id == $stateParams.itemId})[0];
    }).
    error(function(data, status, headers, config) {
      console.error(data);
    });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
