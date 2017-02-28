/**
 * Created by Administrator on 2017/2/24.
 */
'use strict';
/*主页面当前的数据*/

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router', 'myApp.category', 'myApp.index'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
    }]).controller('mainController', ['$scope', '$window', '$document','$http', function ($scope, $window, $document,$http) {
    $scope.toTop = function () {
        console.log($document);
        var perStep = 10;
        $document[0].body.scrollTop = setTimeout(function () {
            $document[0].body.scrollTop = $document[0].body.scrollTop > 0 ? $document[0].body.scrollTop - perStep : 0;
            console.log($document[0].body.scrollTop);
        }, 100);
    };
}]);
