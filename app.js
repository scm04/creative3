var app = angular.module('ConstellationFacts', []);

app.controller('MainCtrl', ['$scope', 'constellations', function($scope, constellations){
  
  $scope.constellations = constellations.getConstellations();
  
  $scope.selectedConstellationIndex = -1;
  
  $scope.setSelected = function(index) {
    $scope.selectedConstellationIndex = index;
    $scope.constellationFacts = $scope.constellations[index];
  };
  
  $scope.constellationFacts = null;
  
}]);

app.service('constellations', function(){
  var getConstellations = function(){
    return [
    {
      name:'Aries',
      url:'partials/Aries.html'
    }, 
    {
      name:'Cassiopeia',
      url: 'partials/Cassiopeia.html'
    },
    {
      name: 'Cepheus',
      url: 'partials/Cepheus.html'
    },
    {
      name: 'Draco',
      url: 'partials/Draco.html'
    }, 
    {
      name: 'Gemini',
      url: 'partials/Gemini.html'
    },
    { 
      name: 'Orion',
      url: 'partials/Orion.html'
    }, 
    {
      name: 'Ursa-Major',
      url: 'partials/Ursa-Major.html'
    }, 
    {
      name: 'Ursa-Minor',
      url: 'partials/Ursa-Minor.html'
    }
  ];
  };
  
  return {
    getConstellations:getConstellations
  };
});