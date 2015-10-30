/**
 * Created by williamfuller on 10/21/15.
 */
app.controller('pokedexCtrl', function($scope, searchCharacter){

  $scope.search = function(){
    // get pokemon details
    var filteredSearch = $scope.searchCharacter.toLowerCase().replace(/\s+/g,'');

    $scope.characters = [searchCharacter.get({
        value : filteredSearch
      }, function(){},
      function(response){
        if(response.status === 404){
          alert('we are sorry but we could not find what you are looking for')
        }
      }
    )];

    var pokemonObject = searchCharacter.get({value: filteredSearch}, function(value, responseHeader) {
      console.log('Pokemon Object: ', pokemonObject);
    });

  };

  $scope.randomCharacter = function(){

    function singleRandom() {
      return Math.floor((Math.random() * 718) + 1);
    }

    $scope.characters = [searchCharacter.get({value : singleRandom()}, function(){},
      function(response){
        if(response.status === 404){
          alert('Oh no something has broken with our randomizer')
        }
      }
    )];

    var pokemonObject = searchCharacter.get({value: singleRandom()}, function(value, responseHeader) {
      console.log('Pokemon Object: ', pokemonObject);
    });


  };

});