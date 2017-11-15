var app = angular.module('Project', [
    'ui.router',
    'oc.lazyLoad',
])
.controller("PortfolioCtrl",function($scope, $http, $state){
  console.log('PORTFOLIO');

  // REDIRECT TO ABOUT PORTION
  $scope.gotoAbout = function(){
    $('.nav-about a').click();
  }

  // REDIRECT TO CONTACT PORTION
  $scope.gotoContact = function(){
    $('.nav-contact a').click();
  }
})
