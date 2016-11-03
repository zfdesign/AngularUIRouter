(function () {
    "use strict";

    var HelpController = function ($scope) {
        console.log("HelpController loaded!");
        $scope.popularArticles = [
            {"id": 1, "urlTitle": "article-1", "title": "How do I know if my order has been confirmed?"}, 
            {"id": 2, "urlTitle": "article-2", "title": "My order has been rejected. What can I do?"}, 
            {"id": 3, "urlTitle": "article-3", "title": "My food is late, what should I do?"}, 
            {"id": 4, "urlTitle": "article-4", "title": "My order is here, but it’s not right. What should I do?"}
        ];
    };

    var app = angular.module("app");
    app.controller("HelpController", ["$scope", HelpController]);

}());