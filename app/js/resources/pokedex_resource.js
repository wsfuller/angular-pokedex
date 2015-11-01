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