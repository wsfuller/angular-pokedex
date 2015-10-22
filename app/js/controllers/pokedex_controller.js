/**
 * Created by williamfuller on 10/21/15.
 */
app.controller('pokedexCtrl', function($scope, $http){
    // get pokemon
  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v1/pokemon/89'
  }).then(function successCallback(data) {
    $scope.pokemons = data;
    console.log($scope.pokemons);
    $scope.selectedPokemon = $scope.pokemons[0];

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });





});