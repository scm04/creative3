var app = angular.module('ConstellationFacts', []);

app.controller('MainCtrl', ['$scope', 'constellations', function($scope, constellations){
  
  $scope.constellations = constellations.getConstellations();
  
  $scope.selectedConstellationIndex = -1;
  
  $scope.backgroundImg = "background/Background.jpg";
  
  $scope.constellationFacts = null;
  
  $scope.setSelected = function(index) {
    $scope.selectedConstellationIndex = index;
    $scope.constellationFacts = $scope.constellations[index];
    $scope.backgroundImg = $scope.constellations[index].img;
    $('.container').css('background', 'url(' + $scope.backgroundImg +')');
  };
  
}]);

app.service('constellations', function(){
  var getConstellations = function(){
    return [
    {
      name:'Aries',
      url:'partials/Aries.html',
      img:'background/Aries.jpg'
    }, 
    {
      name:'Cassiopeia',
      url: 'partials/Cassiopeia.html',
      img: 'background/Cassiopeia.jpg'
    },
    {
      name: 'Cepheus',
      url: 'partials/Cepheus.html',
      img: 'background/Cepheus.jpg'
    },
    {
      name: 'Draco',
      url: 'partials/Draco.html',
      img: 'background/Draco.jpg'
    }, 
    {
      name: 'Gemini',
      url: 'partials/Gemini.html',
      img: 'background/Gemini.jpg'
    },
    { 
      name: 'Orion',
      url: 'partials/Orion.html',
      img: 'background/Orion.jpg'
    }, 
    {
      name: 'Ursa-Major',
      url: 'partials/Ursa-Major.html',
      img: 'background/Ursa-Major.jpg'
    }, 
    {
      name: 'Ursa-Minor',
      url: 'partials/Ursa-Minor.html',
      img: 'background/Ursa-Minor.jpg'
    }
  ];
  };
  
  return {
    getConstellations:getConstellations
  };
});