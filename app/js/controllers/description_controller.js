/**
 * Created by williamfuller on 12/12/15.
 */
app.controller('descriptionCtrl', function($scope, $http, $timeout) {
	$timeout(function() {
		$scope.pokemonDescriptionURL = $scope.$parent.pokemon.descriptions[0].resource_uri;

		if ($scope.pokemonDescriptionURL == 'undefined') {
			alert('no Description found');
		}

		console.log('parent pokemon: ', $scope.pokemonDescriptionURL);

		$http({
			method: 'GET',
			url: 'https://pokeapi.co/' + $scope.pokemonDescriptionURL
		}).then(function(results) {
			console.log('results: ', results);
			$scope.description = results.data.description;
			console.log($scope.description);
		});
	}, 1000);
});
