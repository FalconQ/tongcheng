/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/dataSelect/dataSelect.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DataSelectController',['$scope',function ($scope) {
        $scope.info = '123';
    }])
})