
    /*eslint-env browser*/







    var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);
   
    

    function myFunction() {
        
    // Get the snackbar DIV
    var toastNotification = document.getElementById("snackbar");

    // Add the "show" class to DIV
    toastNotification.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toastNotification.className = toastNotification.className.replace("show", ""); }, 3000);
}

function myFunction2() {
    console.log('myFunction2 is being called');
    // Get the snackbar DIV
    var toastNotification2 = document.getElementById("snackbar2");

    // Add the "show" class to DIV
    toastNotification2.className = "show";


    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toastNotification2.className = toastNotification2.className.replace("show", ""); }, 3000);
}

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
        $scope.searchUserInput = function() {
            var test = "https://www.reddit.com/r/" + $scope.subReddit + "/" + $scope.redditFilter + "/.json?limit=20";
            

            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {
            
            $scope.responseData = myArr;
                
            //Reset search filter query 
            $scope.subReddit = "";
        }, function(err) {
                this.myFunction();
                $scope.subReddit = "";
                
            });
        }
        

        $scope.search = function(name) {
            $http.get("https://www.reddit.com/r/" + name + "/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            this.myFunction2();
            $scope.responseData = myArr;
            console.log(myArr);

        });
        }
        
        

        
    });
   
       
    



