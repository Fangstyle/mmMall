/**
 * Created by Administrator on 2017/2/24.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]).controller('indexController', ['$scope',
    '$route',
    '$routeParams',
    '$http', function ($scope, $route, $routeParams, $http) {
/*        $http.get("192.168.1.100/mmm/index.json")
            .success(function (response) {
                console.log(response);
            });*/
        var categorys = { "result": [ { "indexmenuId": 0, "name": "比价搜索", "img": "images/ic_search.png", "titlehref": "category.html", "_id": "580831702bcccb2c22ed4772", "__v": 0 }, { "__v": 0, "_id": "580831702bcccb2c22ed4773", "img": "images/ic_cu.png", "indexmenuId": 1, "name": "省钱控", "titlehref": "moneyctrl.html" }, { "__v": 0, "_id": "580831702bcccb2c22ed4774", "img": "images/ic_coudanpin.png", "indexmenuId": 2, "name": "国内折扣", "titlehref": "inlanddiscount.html" }, { "__v": 0, "_id": "580831702bcccb2c22ed4775", "img": "images/ic_bcj.png", "indexmenuId": 3, "name": "白菜价", "titlehref": "baicaijia.html" }, { "__v": 0, "_id": "580831702bcccb2c22ed4776", "img": "images/haitao.png", "indexmenuId": 4, "name": "海淘折扣", "titlehref": "moneyctrl.html" }, { "__v": 0, "_id": "580831702bcccb2c22ed4777", "img": "images/ic_temai.png", "indexmenuId": 5, "name": "优惠券", "titlehref": "coupon.html" }, { "indexmenuId": 6, "name": "查历史价", "img": "images/ic_trend.png", "titlehref": "category.html", "_id": "580831702bcccb2c22ed4778", "__v": 0 }, { "__v": 0, "_id": "580831702bcccb2c22ed4779", "img": "images/gengduo.png", "indexmenuId": 7, "name": "更多", "titlehref": "#" }, { "__v": 0, "_id": "580831702bcccb2c22ed477a", "img": "images/ic_coudanpin.png", "indexmenuId": 8, "name": "凑单品", "titlehref": "gsproduct.html" }, { "indexmenuId": 9, "name": "口碑排行", "img": "images/ic_kb.png", "titlehref": "category.html", "_id": "580831702bcccb2c22ed477b", "__v": 0 }, { "__v": 0, "_id": "580831702bcccb2c22ed477c", "img": "images/ic_mall.png", "indexmenuId": 10, "name": "商城导航", "titlehref": "sitenav.html" }, { "__v": 0, "_id": "580831702bcccb2c22ed477d", "img": "images/ic_pp.png", "indexmenuId": 11, "name": "品牌大全", "titlehref": "brandTitle.html" } ] };
        $scope.categoryList = categorys.result;
        console.log($scope.categoryList)
    }])
