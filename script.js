
    /*eslint-env browser*/







    var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);
   
    
    
    


    app.controller('myCtrl', function($scope, $http) {
        
        $scope.names = ["Hot", "Top", "New", "Rising"];
        $http.get("https://www.reddit.com/r/all/hot/.json?limit=20")
            .then(function(myArr) {

            console.log(myArr);
            $scope.responseData = myArr;
        })
        
        $scope.Hot = function() {
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/hot/.json?limit=20")
            .then(function(myArr) {
            console.log(myArr);
            $scope.responseData = myArr;
        });
        }
        
        $scope.Top = function() {
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/top/.json?limit=20")
            .then(function(myArr) {
            $scope.responseData = myArr;
        });
        }
        
        $scope.New = function() {
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/new/.json?limit=20")
            .then(function(myArr) {
            $scope.responseData = myArr;
        });
        }
        
        $scope.Rising = function() {
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/rising/.json?limit=20")
            .then(function(myArr) {
            $scope.responseData = myArr;
        });
        }
        
        
        
        
        
        
    
        
        
    });
   
       
    



