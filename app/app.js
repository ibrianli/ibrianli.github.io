var app = angular.module('myApp', ["ngRoute","ngAnimate","ngTouch"]);

app.controller('mainController', function($scope) {

    $scope.hamburgerLoaded = false;

    $scope.$on('$routeChangeSuccess', function(){
        // updates the nav bar to active color
        helperApp.navigation.init();
    });
    $scope.$on("$includeContentLoaded", function(){
        // loads each time for include content

    });
    $scope.$on("$viewContentLoaded", function(){
        // loads each time for view content update
        if ($scope.hamburgerLoaded === false) {
            // loads only first time a view page is loaded.
            helperApp.hamburger.init();
            $scope.hamburgerLoaded = true;
        }
    });
});

app.config( function( $routeProvider ) {
    $routeProvider
    .when("/", {
        templateUrl : "app/templates/main.htm"
        // any callback functions to run?
    })
    .when("/bio", {
        templateUrl : "app/templates/bio.htm"
    })
    .when("/contact", {
        templateUrl : "app/templates/contact.htm"
    })
    .when("/experience", {
        templateUrl : "app/templates/experience.htm"
    })
    .when("/work", {
        templateUrl : "app/templates/work.htm"
    });
});


