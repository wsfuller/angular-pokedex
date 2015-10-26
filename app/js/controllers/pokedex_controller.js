/**
 * Created by williamfuller on 10/21/15.
 */
app.controller('pokedexCtrl', function($scope, $http, $timeout){

  // making search input lowercase, create better search results
  //$scope.searchCharacter = '';
  //$scope.$filter('searchCharacter', function() {
  //
  //});

  $scope.search = function(){
    // get pokemon details
    var searchCharacter = $scope.searchCharacter.toLowerCase().replace(/\s+/g,'');
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v1/pokemon/' + searchCharacter
    }).then(function successCallback(response) {
      $scope.characters = [response.data];
      console.log($scope.characters);
    }, function errorCallback(response) {
      alert('we are sorry but we could not find what you are looking for');
    });
  };

  $scope.randomCharacter = function(){
    //console.log('random character');

    function singleRandom() {
      return Math.floor((Math.random() * 718) + 1);
    }
    console.log(singleRandom());

    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v1/pokemon/' + singleRandom()
    }).then(function successCallback(response) {
      $scope.characters = [response.data];
      console.log($scope.characters);
    }, function errorCallback(response) {
      alert('we are sorry but we could not find what you are looking for');
    });


  };








});