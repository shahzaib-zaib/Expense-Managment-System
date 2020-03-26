var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
    console.log("In myController...");

    $scope.newUser = {}


    $scope.users = [
        {userdescription: "Purchase accessories", useramount: "25000", usercategory:"parsonal"},
        {userdescription: "Fuel", useramount: "5000", usercategory:"parsonal"}

    ];

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };

    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.updateUser() = function(){

    };
});



