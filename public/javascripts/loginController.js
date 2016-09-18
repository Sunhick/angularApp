var testApp = angular.module('testApp', []);
testApp.controller('loginController', function($http){
    this.Submit = function(login) {   
        console.log("submit clicked " + login.email + login.pword);
    };
});