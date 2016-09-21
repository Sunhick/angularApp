/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: main controller 
*
*  Copyright (c) 2016. University of Colorado, boulder
*/
var testApp = angular.module('testApp');
testApp.controller('mainController', function(){
    var self = this;
    self.activeMenu = "Home";
    self.headerMenus = [
        { name: "Home", link: "#", glyphicon: "glyphicon glyphicon-home" },
        { name: "Downloads", link: "#", glyphicon: "glyphicon glyphicon-download" },
        { name: "Github", link:"https://github.com/DrewMeyersCUboulder/UPOD_Bridge", glyphicon: "glyphicon glyphicon-link" },
        { name: "Projects", link:"#" },
        { name: "Contact Us", link:"#" }
    ];

    self.activate = function(selectedIndex) {
        self.activeMenu = self.headerMenus[selectedIndex].name;
    };
});