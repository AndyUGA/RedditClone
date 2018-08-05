
    /*eslint-env browser*/







    var app = angular.module('myApp', []);
   

    
    


    app.controller('myCtrl', function($scope, $http) {
        
        $http.get("https://www.reddit.com/r/all/hot/.json?limit=20")
            .then(function(myArr) {
            console.log(myArr);
            $scope.responseData = myArr;
        })
        
        $scope.call = function() {
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/hot/.json?limit=20")
            .then(function(myArr) {
            console.log(myArr);
            $scope.responseData = myArr;
        });
        }
       
        
        
        
        
        
        
    
        
        
    });
   
       
    



