(function(){
    "use strict";

    var app = angular.module("app", ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) { 

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


    //
    // For any unmatched url, redirect to /help1
    $urlRouterProvider.otherwise("/");

    //
    // States
    $stateProvider
      // /help1/
      .state('help1', {
        url: "/",
        templateUrl: "/help1/partials/index.html",
        controller: function ($scope) {
          $scope.popularArticles = articles;
        }
      })
      // /help1/ther-questions/
      .state('help1.other-questions', {
        url: "other-questions",
        templateUrl: "/help1/partials/other-questions.html"
      })
      // /help1/ther-questions/categories
      .state('help1.other-questions.categories', {
        url: "/categories",
        templateUrl: "/help1/partials/categories.html",
        controller: function($scope) {
          $scope.categories = categories;
        }
      })
      // /help1/category/{id}/{urlTitle}
      .state('category', {
        url: "/category/{id}/{urlTitle}",
        templateUrl: "/help1/partials/category.html",
        controller: function($scope) {
          $scope.articles = articles;
          $scope.title = "I've had an issue while ordering";
        }
      })
      // /help1/ther-questions/contact
      .state('help1.other-questions.contact', {
        url: "/contact",
        templateUrl: "/help1/partials/contact.html",
        controller: function($scope) {
          $scope.buttons = contactButtons;
        }
      })
      // /help1/article/{id}/{urlTitle}
      .state('article', {
        url: "/article/{id}/{urlTitle}",
          templateUrl: "/help1/partials/article.html",
          controller: function ($scope) {
            $scope.title = "Some title...";
          }
      })
      // /help1/article/contact
      .state('article.contact', {
        url: "/contact",
        templateUrl: "/help1/partials/contact.html",
        controller: function($scope) {
          $scope.buttons = contactButtons;
        }
      })
      // /help1/contact
      .state('contact', {
        url: "/contact",
        templateUrl: "/help1/partials/contact.html",
        controller: function($scope) {
          $scope.buttons = contactButtons;
        }
      });

      $locationProvider.html5Mode(true);
  });

}());