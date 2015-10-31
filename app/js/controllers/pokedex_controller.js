/**
 * Created by williamfuller on 10/21/15.
 */
app.controller('pokedexCtrl', function($scope, searchCharacter, $http){

  // User search function
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
      pokemonParser(pokemonObject);
    });

    $scope.searchCharacter = [];
  };

  // Generates random number between 1 - 718 which serves as the ID for a Pokemon Character
  $scope.randomCharacter = function(){

    var randomID = Math.floor((Math.random()* 718) + 1);

    $scope.characters = [searchCharacter.get({value : randomID}, function(){


        $http({
          method: 'GET',
          url: 'http://pokeapi.co/api/v1/description/874/'
        }).then(function successCallback(data) {
          $scope.description = [data.data];
          console.log($scope.description)
          });







      },
      function(response){
        if(response.status === 404){
          alert('Oh no something has broken with our randomizer')
        }
      }
    )];

    pokemonObject = searchCharacter.get({value: randomID}, function(value, responseHeader) {
      console.log('Random Pokemon Object: ', pokemonObject);
      pokemonParser(pokemonObject);
    });
  };






















  // Pokemon Object Parser
  function pokemonParser() {
    var pokemonID           = pokemonObject.pkdx_id;
    var pokemonHP           = pokemonObject.hp;
    var pokemonAttack       = pokemonObject.attack;
    var pokemonDefense      = pokemonObject.defense;
    var pokemonSpeed        = pokemonObject.speed;
    var pokemonSpeedAttack  = pokemonObject.sp_atk;
    var pokemonSpeedDefense = pokemonObject.sp_def;
    var pokemonHeight       = pokemonObject.height;
    var pokemonWeight       = pokemonObject.weight;
    var pokemonExperience   = pokemonObject.exp;

    // Needed for progress bar returns integer of attribute, Angular Template will return error in current-value
    $scope.pokemonHP            = pokemonHP;
    $scope.pokemonAttack        = pokemonAttack;
    $scope.pokemonDefense       = pokemonDefense;
    $scope.pokemonSpeed         = pokemonSpeed;
    $scope.pokemonSpeedAttack   = pokemonSpeedAttack;
    $scope.pokemonSpeedDefense  = pokemonSpeedDefense;
    $scope.pokemonHeight        = pokemonHeight;
    $scope.pokemonWeight        = pokemonWeight;
    $scope.pokemonExperience    = pokemonExperience;

    if(pokemonID <= 9){
      $scope.pokemonID = '00' + pokemonID;
      //console.log('less than 9 ' , pokemonID);
    }
    else if (pokemonID >= 10 && pokemonID < 100){
      $scope.pokemonID = '0' + pokemonID;
      //console.log('greater than 10' , pokemonID);
    }
    else{
      $scope.pokemonID = pokemonID;
      //console.log('pokemonID equals: ', pokemonID)
    }
  };

});