/**
 * Created by williamfuller on 10/21/15.
 */
app.factory('Pokemon', ['$resource', function ($resource){
  return $resource('http://pokeapi.co/api/v1/pokemon/89', {},{
    'query': {
      method: 'GET',
      isArray: false
    }
  });
}]);