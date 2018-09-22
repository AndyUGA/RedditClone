
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
        

        
        $scope.search = function(name) {
            $http.get("https://www.reddit.com/r/" + name + "/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {
                
            $scope.responseData = myArr;
            console.log(name);
        });
        }
        
        
        

        
        
        
        
        
    
        
        
    });
   
       
    



