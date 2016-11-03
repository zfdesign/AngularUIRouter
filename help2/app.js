(function(){
    "use strict";

    var app = angular.module("app", ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) { 

    // MODELS
    var categories = [
      {"id": 1, "urlTitle": "category-1", "title": "I've had an issue while ordering"}, 
      {"id": 2, "urlTitle": "category-2", "title": "How do I use this JUST EAT thing?"}, 
      {"id": 3, "urlTitle": "category-3", "title": "I’ve got a problem with a current order"}, 
      {"id": 4, "urlTitle": "category-4", "title": "I'm not happy about my last order"}
    ];

    var articles = [
      {"id": 1, "urlTitle": "article-1", "title": "How do I know if my order has been confirmed?"}, 
      {"id": 2, "urlTitle": "article-2", "title": "My order has been rejected. What can I do?"}, 
      {"id": 3, "urlTitle": "article-3", "title": "My food is late, what should I do?"}, 
      {"id": 4, "urlTitle": "article-4", "title": "My order is here, but it’s not right. What should I do?"}
    ];

    var contactButtons = [
      {"title": "Chat now"}, 
      {"title": "Email our happy helpers"}, 
      {"title": "I'd rather call"}
    ];

    var homeView = {
            templateUrl : '/help2/partials/home.html',
            controller: function($scope, $rootScope) {
              $scope.popularArticles = articles;
              $rootScope.hideFaqLink = true;
            }
          };

    var contactView = {
            templateUrl : '/help2/partials/contact.html',
            controller: function ($scope) {
              $scope.buttons = contactButtons;
            }
          };


    //
    // For any unmatched url, redirect to /help1
    $urlRouterProvider.otherwise("/");

    //
    // States
    $stateProvider

      // /help2/
      .state('help2', {
        url: "/",
        views: {
          'home': homeView
        },
      })

      // /help2/other-questions/
      .state('other-questions', {
        url: "/other-questions",
        views: {
          'home': homeView,
          'faq': {
            templateUrl : '/help2/partials/faq.html',
            controller: function ($scope, $rootScope) {
              // TODO: load static
              $scope.categories = categories;
              $rootScope.hideFaqLink = false;
            }
          },
          'contact': contactView
        }
      })

      // /help2/section/{id}/{urlTitle}
      .state('category', {
        url: '/section/{id}/{urlTitle}',
        views: {
          'home': homeView,
          'category': {
            templateUrl : '/help2/partials/category.html',
            controller: function($scope, $rootScope, $stateParams) {
              $scope.category = {
                "title": categories[$stateParams.id - 1].title,
                "articles" : articles 
              };
              $rootScope.hideFaqLink = false;
            }
          },
          'contact': contactView
        }
      })

      // /help2/article/{id}/{urlTitle}
      .state('article', {
        url: '/article/{id}/{urlTitle}',
        views: {
          // 'home': {},
          'atricle': {
            templateUrl: '/help2/partials/article.html',
            controller: function ($scope, $stateParams) {
              $scope.title = articles[$stateParams.id - 1].title;
            }
          },
          'contact': contactView
        }
      });

      $locationProvider.html5Mode(true);
  });

}());