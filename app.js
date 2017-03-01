var app = angular.module('ConstellationFacts', []);

app.controller('MainCtrl', ['$scope', 'constellations', function($scope, constellations){

  $scope.constellations = constellations.getConstellations();

  $scope.selectedConstellation = 'Choose a Constellation';

  $scope.selectedConstellationIndex = -1;

  $scope.backgroundImg = "background/Background.jpg";

  $scope.constellationFacts = null;

  $scope.setSelected = function(index) {
    console.log(index);
    $scope.selectedConstellationIndex = index;
    if(index==0){
        $scope.selectedConstellation = 'Choose a Constellation';
    } else {
        $scope.selectedConstellation = $scope.constellations[index].name;
    }
    $scope.constellationFacts = $scope.constellations[index];
    $scope.backgroundImg = $scope.constellations[index].img;
    $('.container').css('background', 'url(' + $scope.backgroundImg +')');
    $('.container').css('background-color', 'navy');
    $('.container').css('background-repeat', 'no-repeat');
    $('.container').css('background-position', 'center');
    $('.container').css('background-size', 'cover');
    $('.container').css('background-attachment', 'fixed');
    $('.container').css('font-family', '\'Share\',cursive');
    $('.container').css('color', 'white');
    $('.container').css('padding', '10px');
  };

}]);

app.service('constellations', function(){
  var getConstellations = function(){
    return [
    {
      name:'Home',
      url:'partials/Home.html',
      img:'background/Background.jpg'
    },
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
