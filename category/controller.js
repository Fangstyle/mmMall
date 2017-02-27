'use strict';

angular.module('myApp.category', ['ui.router'])

.config(function($stateProvider) {
    $stateProvider
        .state('category', {
            url: "/category",
            templateUrl:'category/view.html'
        });
});
