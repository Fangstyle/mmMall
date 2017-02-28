'use strict';
/*var categoryList = {
 "result": [
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4771",
 "indexmenuId": 1,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4772",
 "indexmenuId": 2,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4773",
 "indexmenuId": 3,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4774",
 "indexmenuId": 4,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4775",
 "indexmenuId": 5,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4776",
 "indexmenuId": 6,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4777",
 "indexmenuId": 7,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4778",
 "indexmenuId": 8,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4779",
 "indexmenuId": 9,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4780",
 "indexmenuId": 10,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4781",
 "indexmenuId": 11,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 },
 {
 "__v": 0,
 "_id": "580831702bcccb2c22ed4782",
 "indexmenuId": 12,
 "name": "省钱控",
 "item": [
 "电视",
 "空调",
 "影院",
 "冰箱",
 "DVD",
 "音响/音箱",
 "洗衣机",
 "热水器",
 "酒柜/水吧/冰柜",
 "消毒柜/洗完器"
 ]
 }
 ]
 }*/
angular.module('myApp.category', ['ui.router', 'ngAnimate', 'app.server.httpServer'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('category', {
                url: "/category",
                templateUrl: 'category/view.html',
                controller: 'categoryController'
            });
    })
    .controller('categoryController', ['$scope', '$http', 'httpServer', function ($scope, $http, httpServer) {
        $scope.currentId = -1;
        $scope.itemList = [];
        var req = {
            method: 'get',
            url: 'http://mmb.ittun.com/api/getcategorytitle',
            headers: {
                'Content-Type': 'json'
            }
        }

        $http(req).then(function (res) {
            $scope.categoryList = res.data.result;
        }, function (err) {
            console.log('category获取数据失败');
        });
        $scope.pre='';
        $scope.showItem = function (id) {
            httpServer.jsonP("http://mmb.ittun.com/api/getcategory", {'titleid': id}, (data) => {
                $scope.itemList = data.result;
                var target = $('#category_item_'+id);
                var str = '';
            for(var i = 0 ;i< $scope.itemList.length;i++){
                str+=`<li>${ $scope.itemList[i].category}</li>\n`;
            }
                target.html(str);

                var flag = true;
                flag = target.css('display') == 'block' ?  false : true;
                $('.category-detail').slideUp("normal");
                  if(flag){
                        $('#category_item_' +id).slideDown("normal");
                    }
            });
        }
    }]);
