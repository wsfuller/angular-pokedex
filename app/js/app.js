/**
 * Created by steve on 10/20/15.
 */
var app = angular.module('pokedex', ['ngMaterial', 'ngResource', 'isteven-omni-bar'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey');
  });

