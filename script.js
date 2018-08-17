
    /*eslint-env browser*/







    var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);
   
    
    
    


    app.controller('myCtrl', function($scope, $http) {
        
        $scope.names = ["hot", "top", "new", "rising"];
        $scope.redditFilter = "hot";
       
        //Gets data from all subreddit to display on home page
        $http.get("https://www.reddit.com/r/all/hot/.json?limit=20")
            .then(function(myArr) {
            $scope.responseData = myArr;
        })
        
        //Gets data from user specified subreddit and filter 
        $scope.search = function() {
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {
            console.log(myArr);
            $scope.responseData = myArr;
        });
        }
        
        $scope.searchAll = function() {
            $http.get("https://www.reddit.com/r/all/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {
            console.log(myArr);
            $scope.responseData = myArr;
        });
        }
        
        $scope.searchOC = function() {
            $http.get("https://www.reddit.com/original/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {
            console.log(myArr);
            $scope.responseData = myArr;
        });
        }
        
        
        
        
        
        
        
        
    
        
        
    });
   
       
    



