// (function(){
//     "use strict";

    var help = angular.module("help", ['ui.router']);

    help.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("");
    //
    // Page URL states
    $stateProvider
      .state('help', {
        url: "",
        controller: homeController
      })
      .state('help.otherQuestions', {
        url: "/other-questions",
        templateUrl: "other-questions/index.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      // .state('contact', {
      //   url: "/contact/",
      //   templateUrl: "contact/index.html"
      // })
      .state('category', {
        url: "/category/:id/:title",
        controller: function ($scope) {
          console.log($scope.id);
        }
      })
      .state('article', {
        url: "/article/:id/:title",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      });

      $locationProvider.html5Mode(true);
  });

// }());