/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: testApp module 
*
*  Copyright (c) 2016. University of Colorado, boulder
*/

// Module should be declared as below only once. 
// And controller can access it as angular.module('testApp').controller(....);
var app = angular.module('testApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
        // route for the home page
        .when('/index', {
            templateUrl : 'index',
            controller  : ''
        })

        // route for the about page
        .when('/projects', {
            templateUrl : 'projects',
            controller  : ''
        })

        // route for the contact page
        .when('/contactus', {
            templateUrl : 'contactus',
            controller  : ''
        })

        .otherwise({
            redirectTo: "/index"
        });
});