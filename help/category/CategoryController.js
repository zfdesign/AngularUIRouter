(function () {
    "use strict";

    var CategoryController = function ($scope) {
        console.log("CategoryController loaded!");
    };

    var app = angular.module("help");
    app.controller("CategoryController", ["$scope", CategoryController]);

}());