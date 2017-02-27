/**
 * Created by Administrator on 2017/2/24.
 */
'use strict';
/*主页面当前的数据*/

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router','myApp.category','myApp.index'])
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
    }]);
