/**
 * Created by Administrator on 2017/2/28.
 */
(function (angular) {
    angular.module('app.server.httpServer',[]).service('httpServer',['$window','$document',
        function ($window,$document) {
        this.jsonP = function (url,data,callback) {
            var querryString = url.indexOf('?') ==-1? '?' : '&';
            for(key in data){
                querryString+=key+'='+data[key]+'&';
            }
            var callbackName = 'jsonp_fang_'+Math.random().toString().replace('.','');
            querryString+='callback='+callbackName;
            var scriptElement = $document[0].createElement('script');
            scriptElement.src=url+querryString;
            $document[0].body.appendChild(scriptElement);
            /*添加标签后，由于script标签 会自执行， 会自动执行jsonp_fang_123（data）的函数*/
            /*当挂在到window上的 jsonp_fang_123（data） 执行结束后 回调删除标签*/
            $window[callbackName]=function (data) {
                callback(data);
                $document[0].body.removeChild(scriptElement);
            };

        }
    }])
})(angular);