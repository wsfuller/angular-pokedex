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

    pokemonObject = searchCharacter.get({value: filteredSearch}, function(value, responseHeader) {
      console.log('Search Input Pokemon Object: ', pokemonObject);
      pokemonIDfilter(pokemonObject);
    });

    $scope.searchCharacter = [];
  };

  // Generates random number between 1 - 718 which serves as the ID for a Pokemon Character
  $scope.randomCharacter = function(){

    var randomID = Math.floor((Math.random()* 718) + 1);

    $scope.characters = [searchCharacter.get({value : randomID}, function(){},
      function(response){
        if(response.status === 404){
          alert('Oh no something has broken with our randomizer')
        }
      }
    )];

    pokemonObject = searchCharacter.get({value: randomID}, function(value, responseHeader) {
      console.log('Random Pokemon Object: ', pokemonObject);
      pokemonIDfilter(pokemonObject);
    });
  };

  function pokemonIDfilter() {
    var pokemonID = pokemonObject.pkdx_id;
    if(pokemonID <= 9){
      $scope.pokemonID = '00' + pokemonID;
      console.log('less than 9 ' , pokemonID);
    }
    else if (pokemonID >= 10 && pokemonID < 100){
      $scope.pokemonID = '0' + pokemonID;
      console.log('greater than 10' , pokemonID);
    }
    else{
      $scope.pokemonID = pokemonID;
      console.log('pokemonID equals: ', pokemonID)
    }
  };
});