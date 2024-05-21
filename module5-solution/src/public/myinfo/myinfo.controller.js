(function(){
    angular.module('public')
        .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['$scope', '$http', 'MenuService'];

    function MyInfoController($scope, $http, MenuService){
        $scope.myinfoPrefs = MenuService.getSignupPrefs();
        if($scope.myinfoPrefs === undefined || $scope.myinfoPrefs === null){
            $scope.showprefs = false;
        }else{
            $scope.showprefs = true;
        };
    }
})();