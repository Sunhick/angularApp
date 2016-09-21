/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: Login controller 
*
*  Copyright (c) 2016. University of Colorado, boulder
*/
'use strict';

var testApp = angular.module('testApp');
testApp.filter("urlFilter", function () {
    return function (link) {
        var result;
        var startingUrl = "http://";
        var httpsStartingUrl = "https://"; 

        if(link.startWith(startingUrl) || link.startWith(httpsStartingUrl))
            result = link;
        else
            result =  "http://localhost:3000/" + link;
        console.log(result);
        return result;
    }
});

String.prototype.startWith = function (str) {
    return this.indexOf(str) == 0;
}