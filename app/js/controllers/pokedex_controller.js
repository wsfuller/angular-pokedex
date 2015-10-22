/**
 * Created by williamfuller on 10/21/15.
 */
app.controller('pokedexCtrl', function($scope, $http){

  $scope.search = function(){
    // get pokemon details
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v1/pokemon/' + $scope.searchPokemon
    }).then(function successCallback(data) {
      $scope.characters = [data.data];
      console.log($scope.characters);



    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }








});