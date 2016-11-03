(function () {
    "use strict";

    var HelpController = function ($scope) {
        console.log("HelpController loaded!");
    };

    var app = angular.module("help");
    app.controller("HelpController", ["$scope", HelpController]);

}());