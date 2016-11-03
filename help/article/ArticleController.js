(function () {
    "use strict";

    var ArticleController = function ($scope) {
        console.log("ArticleController loaded!");
    };

    var app = angular.module("help");
    app.controller("ArticleController", ["$scope", ArticleController]);

}());