/**
 * Created by williamfuller on 10/21/15.
 */
app.factory('searchCharacter', function($resource){
  return $resource('http://pokeapi.co/api/v1/pokemon/:value', {value: '@searchCharacter'},{
    'query': {
      method: 'GET',
      isArray: true
    }
  });
});

app.factory('characterDescription', function($resource){
  return $resource('http://pokeapi.co/api/v1/description/:value', {value: '@searchCharacter'},{
    'query': {
      method: 'GET',
      isArray: true
    }
  });
});