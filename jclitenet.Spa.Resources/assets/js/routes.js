﻿'use strict'

define([
    'angular',
    'app',
    'homeController',
    "loginController",
    'tutorialController'],

    function (ng, app) {

        return app.config(function ($routeProvider) {

            $routeProvider

                .when('/', {
                    title: 'Home',
                    templateUrl: '../assets/views/index.html',
                    controller: 'HomeController'
                })
                .when('/login', {
                    title: 'Login',
                    templateUrl: '../assets/views/login.html',
                    controller: 'LoginController'
                })
                //.when('/tutorial/:id/:test', { //implement multiple params
                .when('/tutorial/:id', {
                    title: 'Update Tutorial',
                    templateUrl: '../assets/views/tutorials/tutorial.html',
                    controller: 'TutorialController'
                })
                .when('/createtutorial', {
                    title: 'Create Tutorial',
                    templateUrl: '../assets/views/tutorials/createtutorial.html',
                    controller: 'TutorialController'
                })
                .otherwise({
                    redirectTo: '../assets/views/login.html',
                });
        });

    }
)