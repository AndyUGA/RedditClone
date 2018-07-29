
    /*eslint-env browser*/







    var app = angular.module('myApp', []);
   

    
    


    app.controller('myCtrl', function($scope, $http, $timeout) {
        
        
        
        /*
        * Request data for top 20 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/hot/.json?limit=20")
            .then(function(myArr) {
            $scope.myWelcome = myArr;
        });
        
        
        
        
        
    
        
        
    });
   
       
    



