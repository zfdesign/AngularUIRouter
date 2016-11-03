(function () {
    "use strict";

    var SearchController = function ($scope) {
        console.log("SearchController loaded!");
    };

    var app = angular.module("help");
    app.controller("SearchController", ["$scope", SearchController]);

}());