/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: Login controller 
*
*  Copyright (c) 2016. University of Colorado, boulder
*/
var testApp = angular.module('testApp');
testApp.controller('loginController', function($http){
    var self = this;
    self.Submit = function(login) {   
        console.log("submit clicked " + login.email + login.pword);
    };
});