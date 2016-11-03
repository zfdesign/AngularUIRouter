(function () {
    "use strict";

    var ContactController = function ($scope) {
        console.log("ContactController loaded!");
    };

    var app = angular.module("help");
    app.controller("ContactController", ["$scope", ContactController]);

}());