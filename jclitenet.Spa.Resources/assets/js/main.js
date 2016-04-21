'use strict';

requirejs.config({

    baseUrl: "../assets/js",

    paths: {

        "angular": ["lib/angular/angular.min"],

        "angularUIRoute": ["lib/angular/angular-ui-router.min"],

        "angularResource": ["lib/angular/angular-resource.min"],

        "angularCookies": ["lib/angular/angular-cookies.min"],

        "angularAnimate": ["lib/angular/angular-animate.min"],

        "angularMessages": ["lib/angular/angular-messages.min"],

        "q": ["//cdnjs.cloudflare.com/ajax/libs/q.js/0.9.2/q.min",
              "lib/q/q.min"],

        "underscore": ["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
                       "lib/underscore/underscore-min"],
        //modules
        "moduleController":"modules/module-controller",
        "moduleService": "modules/module-service",
        "moduleDirective": "modules/module-directive",

        //constants
        "app-constants": "constants/app-constants",

        //controllers
        "homeController": "controllers/home-controller",
        "loginController": "controllers/login-controller",
        "tutorialController": "controllers/tutorial-controller",

        //services
        "tutorialService": "services/tutorial-service",
        "authenticationService": "services/authentication-service",
        "resumeService": "services/resume-service",

        //directives
        "headerFixed": "directives/header-fixed",
        "editorSetup": "directives/editor-setup",
        "editorValue": "directives/editor-value",
        "addressEditor": "directives/address-editor",
        "introductionEditor": "directives/introduction-editor",
        "emailEditor": "directives/email-editor",

        //utilities
        "util": "utilities/utilities",

    },

    waitSeconds: 0,

    shim: {
        "angular": {
            exports: "angular"
        },
        'underscore': {
            exports: '_'
        },
		"angularResource": ['angular'],
		"angularCookies": ['angular'],
		"angularAnimate": ['angular'],
		"angularMessages": ['angular'],
		"angularUIRoute": {
            deps: ['angular']
		}
    },

    priority: ["angular"]

});

requirejs(["angular", "app", "appState", "appRun"], function (ng, app) {

    "use strict";

    try {

        ng.element(document).ready(function () {
            ng.bootstrap(document, [app['name']]);
        });

    } catch (e) {
        console.error(e.stack || e.message || e);
    }

})