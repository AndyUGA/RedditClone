
    /*eslint-env browser*/







    var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);
   
    
    app.controller('myCtrl', function($scope, $http) {
        
        //Filter options 
        $scope.names = ["hot", "top", "new", "rising"];
        
        //Set default filter to hot
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
                
            $scope.responseData = myArr;
                
            //Reset search filter query 
            $scope.subReddit = "";
        });
        }
        

        $scope.searchAll = function() {
            $http.get("https://www.reddit.com/r/all/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            $scope.responseData = myArr;
        });
        }
        
        $scope.searchOC = function() {
            $http.get("https://www.reddit.com/original/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            $scope.responseData = myArr;
        });
        }
        
        $scope.searchApple = function() {
            $http.get("https://www.reddit.com/r/apple/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            $scope.responseData = myArr;
        });
        }
        
        $scope.searchUGA = function() {
            $http.get("https://www.reddit.com/r/UGA/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            $scope.responseData = myArr;
        });
        }
        
        $scope.searchAskReddit = function() {
            $http.get("https://www.reddit.com/r/AskReddit/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            $scope.responseData = myArr;
        });
        }
        
        
        
        
        
    
        
        
    });
   
       
    



