
    /*eslint-env browser*/




    var app = angular.module('myApp', ['ngMaterial', 'ngMessages']);
   
    

    function displayToastError() {
        
    // Get the snackbar DIV
    var toastNotification = document.getElementById("snackbar");

    // Add the "show" class to DIV
    toastNotification.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toastNotification.className = toastNotification.className.replace("show", ""); }, 3000);
}

    function displayToast() {
    console.log('displayToast is being called');

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
            .then(function(res) {
            $scope.responseData = res;
        })
        
        //Gets data from user specified subreddit and filter 
        $scope.searchUserInput = function() {
            
            
            //Send API request based on subreddit and filter to Reddit API
            $http.get("https://www.reddit.com/r/" + $scope.subReddit + "/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(res) {
            
            //Store the response in responseData variable
            $scope.responseData = res;
                
            this.displayToast();
                
            //Reset search filter query 
            $scope.subReddit = "";
                
        }, function(err) {
                //Display toast error 
                this.displayToastError();
                
                //Reset subreddit searchbox
                $scope.subReddit = "";
                
            });
        }
        

        $scope.search = function(name) {
            $http.get("https://www.reddit.com/r/" + name + "/" + $scope.redditFilter + "/.json?limit=20")
            .then(function(myArr) {

            this.displayToast();
            $scope.responseData = myArr;
            console.log(myArr);

        });
        }
        
        

        
    });
   
       
    



