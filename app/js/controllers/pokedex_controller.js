/**
 * Created by williamfuller on 10/21/15.
 */
app.controller('pokedexCtrl', function($scope, $http, $timeout){

  // making search input lowercase, create better search results
  $scope.searchCharacter = '';
  $scope.$watch('searchCharacter', function() {
    $scope.searchCharacter = $scope.searchCharacter.toLowerCase().replace(/\s+/g,'');
  });


  $scope.search = function(){
    // get pokemon details
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v1/pokemon/' + $scope.searchCharacter
    }).then(function successCallback(data) {
      $scope.characters = [data.data];
      console.log($scope.characters);



    }, function errorCallback(data) {
      alert('we are sorry but we could not find what you are looking for');
    });
  }








});