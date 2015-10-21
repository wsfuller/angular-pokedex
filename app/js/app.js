/**
 * Created by steve on 10/20/15.
 */
var app = angular.module('app', ['ngMaterial'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey');
  });

