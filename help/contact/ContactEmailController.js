(function () {
    "use strict";

    var ContactEmailController = function ($scope) {
        console.log("ContactEmailController loaded!");
    };

    var app = angular.module("help");
    app.controller("ContactEmailController", ["$scope", ContactEmailController]);

}());